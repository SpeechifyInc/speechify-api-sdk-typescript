/**
 * Realtime voice-agent session (hand-written, .fernignore'd).
 *
 * Connect to a realtime voice-agent session from the `{ url, token }` returned by
 * `client.agent.createConversation(...)` / `createSession(...)`.
 *
 * The SDK does NOT capture a microphone or play to speakers — audio device handling is
 * the application's job. It exposes the session as raw PCM byte streams you plumb
 * yourself, plus transcript events. The underlying realtime transport is an internal
 * implementation detail and is never named in the public surface.
 */
import {
  AudioFrame,
  AudioSource,
  AudioStream,
  LocalAudioTrack,
  Room,
  RoomEvent,
  TrackKind,
  TrackPublishOptions,
  TrackSource,
  type RemoteTrack,
  type TextStreamReader,
} from "@livekit/rtc-node";

const DEFAULT_SAMPLE_RATE = 48000;
const DEFAULT_CHANNELS = 1;
const BYTES_PER_SAMPLE = 2; // PCM signed 16-bit little-endian

/** A chunk of raw audio. `data` is PCM signed-16-bit little-endian. */
export interface AudioChunk {
  data: Buffer;
  sampleRate: number;
  channels: number;
}

/** A transcript update. `role` is `"agent"` or `"caller"`. */
export interface TextEvent {
  role: "agent" | "caller";
  text: string;
  final: boolean;
}

/** A live voice-agent session exposed as PCM byte streams + text events. */
export class RealtimeSession {
  private readonly room: Room;
  private readonly pending: AudioChunk[] = [];
  private readonly waiters: ((chunk: AudioChunk | null) => void)[] = [];
  private readonly textCallbacks: ((ev: TextEvent) => void)[] = [];
  private closed = false;
  private inputSource: AudioSource | null = null;
  private publishing: Promise<void> | null = null;
  private readonly pumped = new Set<string>();

  constructor(room: Room) {
    this.room = room;
    this.wireEvents();
  }

  /** Pump any audio tracks already subscribed at connect time (the agent is
   * dispatched server-side, so its track can be present before TrackSubscribed fires). */
  subscribeExisting(): void {
    for (const participant of this.room.remoteParticipants.values()) {
      for (const publication of participant.trackPublications.values()) {
        const track = publication.track;
        if (track && track.kind === TrackKind.KIND_AUDIO) void this.pump(track);
      }
    }
  }

  get connected(): boolean {
    return this.room.isConnected;
  }

  get roomName(): string {
    return this.room.name ?? "";
  }

  /** Async-iterate the agent's audio (PCM16). Ends when the session disconnects. */
  async *outputAudio(): AsyncGenerator<AudioChunk> {
    for (;;) {
      const queued = this.pending.shift();
      if (queued) {
        yield queued;
        continue;
      }
      if (this.closed) return;
      const next = await new Promise<AudioChunk | null>((resolve) => this.waiters.push(resolve));
      if (next === null) return;
      yield next;
    }
  }

  /** Send a chunk of caller audio (PCM signed-16-bit little-endian). The first call
   * publishes the outbound track; subsequent calls stream frames. */
  async sendAudio(
    data: Buffer,
    opts: { sampleRate?: number; channels?: number } = {},
  ): Promise<void> {
    const sampleRate = opts.sampleRate ?? DEFAULT_SAMPLE_RATE;
    const channels = opts.channels ?? DEFAULT_CHANNELS;
    if (!this.inputSource) {
      if (!this.publishing) {
        this.publishing = (async () => {
          const source = new AudioSource(sampleRate, channels);
          const track = LocalAudioTrack.createAudioTrack("caller", source);
          await this.room.localParticipant!.publishTrack(
            track,
            new TrackPublishOptions({ source: TrackSource.SOURCE_MICROPHONE }),
          );
          this.inputSource = source;
        })();
      }
      await this.publishing;
    }
    const samples = new Int16Array(
      data.buffer,
      data.byteOffset,
      Math.floor(data.byteLength / BYTES_PER_SAMPLE),
    );
    const samplesPerChannel = samples.length / channels;
    await this.inputSource!.captureFrame(
      new AudioFrame(samples, sampleRate, channels, samplesPerChannel),
    );
  }

  /** Register a callback invoked for each transcript update (caller + agent). */
  onText(callback: (ev: TextEvent) => void): void {
    this.textCallbacks.push(callback);
  }

  async disconnect(): Promise<void> {
    await this.room.disconnect();
  }

  private deliver(chunk: AudioChunk | null): void {
    const waiter = this.waiters.shift();
    if (waiter) waiter(chunk);
    else if (chunk) this.pending.push(chunk);
  }

  private wireEvents(): void {
    this.room.on(RoomEvent.TrackSubscribed, (track: RemoteTrack) => {
      if (track.kind === TrackKind.KIND_AUDIO) void this.pump(track);
    });
    this.room.on(RoomEvent.Disconnected, () => {
      this.closed = true;
      this.deliver(null);
    });
    this.room.registerTextStreamHandler(
      "lk.transcription",
      (reader: TextStreamReader, participantInfo: { identity?: string }) => {
        void (async () => {
          const text = await reader.readAll();
          const attributes = (reader.info?.attributes ?? {}) as Record<string, string>;
          const final = attributes["lk.transcription_final"] === "true";
          const localIdentity = this.room.localParticipant?.identity;
          const role =
            participantInfo?.identity && participantInfo.identity === localIdentity
              ? "caller"
              : "agent";
          for (const cb of this.textCallbacks) cb({ role, text, final });
        })();
      },
    );
  }

  private async pump(track: RemoteTrack): Promise<void> {
    const sid = track.sid ?? "";
    if (sid) {
      if (this.pumped.has(sid)) return;
      this.pumped.add(sid);
    }
    const reader = new AudioStream(track).getReader();
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      const samples = value.data;
      const data = Buffer.from(samples.buffer, samples.byteOffset, samples.byteLength);
      this.deliver({ data, sampleRate: value.sampleRate, channels: value.channels });
    }
  }
}

export async function connect(opts: { url: string; token: string }): Promise<RealtimeSession> {
  const room = new Room();
  const session = new RealtimeSession(room); // attach handlers BEFORE connecting
  await room.connect(opts.url, opts.token, { autoSubscribe: true, dynacast: false });
  session.subscribeExisting();
  return session;
}

export async function connectConversation(response: {
  url: string;
  token: string;
}): Promise<RealtimeSession> {
  return connect({ url: response.url, token: response.token });
}
