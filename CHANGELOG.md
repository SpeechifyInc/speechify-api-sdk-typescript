# Changelog

## [2.0.0](https://github.com/SpeechifyInc/speechify-api-sdk-typescript/compare/1.0.2...2.0.0) (2026-06-22)


### ⚠ BREAKING CHANGES

* `new SpeechifyClient({ token: ... })` is now `new SpeechifyClient({ apiKey: ... })`. The `tts.` namespace has been removed — call sites move from `client.tts.audio.speech(...)` to `client.audio.speech(...)` and from `client.tts.voices.X` to `client.voices.X`. Method return type changed from `Promise<T>` to `core.HttpResponsePromise<T>`; both are awaitable and resolve to `T` but type-import sites may need updates. Generator-line crossed `0.x` → `3.x` (plus image rename `fern-typescript-node-sdk` → `fern-typescript-sdk`), so internal/private code paths have moved.

### Features

* regenerate SDK on fern-typescript-sdk@3.70.1 with TTS-only surface ([#6](https://github.com/SpeechifyInc/speechify-api-sdk-typescript/issues/6)) ([69ff4e4](https://github.com/SpeechifyInc/speechify-api-sdk-typescript/commit/69ff4e4eb77984bcbca8ea5ab9f18a25b89e8f47))
