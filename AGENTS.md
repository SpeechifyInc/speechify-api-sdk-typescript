# Agent instructions — @speechify/api (TypeScript SDK)

This is a **Fern-generated** SDK. It is published to **npm** as `@speechify/api`.
The source of truth for the API surface lives in the `SpeechifyInc/speechify-api`
repo (`fern/`); this repo receives generated code on the `sdk-release` branch.

**Read this before doing anything that touches a release.** A botched release here
publishes to a public registry and breaks the contract with every customer who
installs the package. This file exists because we already did that once — see
"Postmortem" below.

## The golden rule

**Publishing to npm is effectively IRREVERSIBLE.** Unpublish is restricted to a
72-hour window and you can never republish the same version number. Treat every
publish as permanent.

Never trigger a publish until you have, in order:

1. **Audited the release plumbing** (this file, the workflow, the config, npm auth).
2. **Confirmed the version is correct in EVERY version-bearing file** (see checklist).
3. **Dry-run built and asserted the artifact version** (`npm publish --dry-run`).
4. **Got explicit human sign-off** for the publish itself.

Do NOT admin-merge release PRs to force a publish. Do NOT bypass required reviews.

## Version-surface checklist — the mistake we keep making

The #1 failure mode is **a generated version string not getting bumped**, so the
package publishes under the wrong number (or reports a false version to the API).
A single stale string is a published contract break, not a typo.

When any version changes, **confirm ALL of these agree** before release. Never
check one and assume the rest:

- `.release-please-manifest.json` → `"."`
- `package.json` → `version`
- `src/version.ts` → `SDK_VERSION` (sent as the SDK version header on requests)
- the git tag created for the release
- the version in the built tarball (`npm publish --dry-run` prints `version:`)

Fast audit:

```bash
grep -rnE '"version"|SDK_VERSION|"\."' \
  .release-please-manifest.json package.json src/version.ts
```

`SDK_VERSION` is reported to the API. If it lies, telemetry, version-gating, and
support debugging are all wrong for that release. (In the 3.0.0 release, the
published tarball shipped `SDK_VERSION = "2.0.1"` — a live contract break.)

## Known plumbing traps

- **npm provenance requires case-exact `repository.url`.** `npm publish
  --provenance` fails with **HTTP 422** unless `package.json` `repository.url`
  matches the GitHub repo slug case-sensitively — it is `SpeechifyInc`, not
  `speechifyinc`. The casing is set by the generator config in
  `SpeechifyInc/speechify-api` (`fern/generators.yml`); fix it there so regens
  carry it.
- **npm auth must exist for the publish to succeed.** The publish uses
  `--provenance` with `id-token: write`. That signs provenance via OIDC but does
  **NOT** by itself authenticate the upload — you still need EITHER a configured
  **npm Trusted Publisher (OIDC)** for `@speechify/api` linked to this repo +
  workflow, OR an `NPM_TOKEN` secret wired as `NODE_AUTH_TOKEN`. Without one, the
  publish fails with **HTTP 404 "no permission"**. Verify auth BEFORE relying on
  the automatic publish.
- **`type: "generic"` extra-files no-op silently** unless the target line carries
  an `x-release-please-version` marker comment. `src/version.ts` is bumped this
  way — confirm it actually changed after a release, or fix it manually.
- **npm account 2FA is a passkey.** The CLI `--otp=` flow only accepts TOTP, not
  passkeys, so a terminal `npm publish` prompts `EOTP` and cannot proceed with a
  passkey. Use `npm login --auth-type=web` (browser passkey) for a local publish,
  or an automation token / Trusted Publisher for CI.

## If a release has already gone wrong

- **Wrong version on npm:** treat as permanent. Fix the version wiring, cut a NEW
  correct version. Do not count on unpublish.
- **Tag points at a bad commit:** recreate the tag/GitHub release on the corrected
  commit (public history mutation — back up the old SHA + notes first). Publishing
  from a stale tag re-ships the old bug (e.g. the lowercase `repository.url`).
- There is a `manual-publish.yml` workflow that checks out an explicit tag and
  asserts `version` + `repository.url` before publishing — prefer it for one-off
  republishes.

## Postmortem — the 3.0.0 release (why this file exists)

A routine regeneration was pushed straight to publish. Failures, in order:

1. Breaking-change PRs were admin-merged past the review gate.
2. The automatic publish failed provenance (HTTP 422) because `repository.url` was
   lowercase `speechifyinc` — npm was left at 2.0.0 while the tag said 3.0.0.
3. After fixing casing, publish failed again (HTTP 404) — no npm auth was
   configured (no `NPM_TOKEN`, no Trusted Publisher).
4. When it finally published, the tarball still shipped `SDK_VERSION = "2.0.1"`
   because the generic updater had silently no-oped — found reactively, late.

Lesson: **audit the whole release surface first (versions AND auth AND
provenance), dry-run, get sign-off, then publish.** Treat one stale version
string as a signal to check every other one.
