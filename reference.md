# Reference
## Tts Audio
<details><summary><code>client.tts.audio.<a href="/src/api/resources/tts/resources/audio/client/Client.ts">speech</a>({ ...params }) -> Speechify.GetSpeechResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Synthesize speech audio from text or SSML. Returns the complete audio
file plus billing and speech-mark metadata in a single response. For
low-latency playback or long-form text, use POST /v1/audio/stream.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tts.audio.speech({
    audio_format: "mp3",
    input: "Hello! This is the Speechify text-to-speech API.",
    model: "simba-english",
    voice_id: "george"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Speechify.tts.GetSpeechRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudioClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tts.audio.<a href="/src/api/resources/tts/resources/audio/client/Client.ts">stream</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Synthesize speech and stream the audio back as it is generated, for
low-latency playback. The Accept header selects the audio container.
For short text where receiving the whole file at once is fine, use
POST /v1/audio/speech.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tts.audio.stream({
    Accept: "audio/mpeg",
    input: "input",
    voice_id: "voice_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Speechify.tts.GetStreamRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudioClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tts Voices
<details><summary><code>client.tts.voices.<a href="/src/api/resources/tts/resources/voices/client/Client.ts">list</a>() -> Speechify.GetVoice[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the list of voices available for the user
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tts.voices.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `VoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tts.voices.<a href="/src/api/resources/tts/resources/voices/client/Client.ts">create</a>({ ...params }) -> Speechify.CreatedVoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a personal (cloned) voice for the user
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tts.voices.create({
    sample: fs.createReadStream("/path/to/your/file"),
    name: "name",
    gender: "male",
    consent: "consent"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Speechify.tts.CreateVoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tts.voices.<a href="/src/api/resources/tts/resources/voices/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a personal (cloned) voice
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tts.voices.delete({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Speechify.tts.DeleteVoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tts.voices.<a href="/src/api/resources/tts/resources/voices/client/Client.ts">downloadSample</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Download a personal (cloned) voice sample
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tts.voices.downloadSample({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Speechify.tts.DownloadSampleVoicesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

