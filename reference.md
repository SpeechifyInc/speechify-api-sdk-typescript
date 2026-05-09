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

Gets the speech data for the given input

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
    input: "input",
    voiceId: "voice_id",
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

**requestOptions:** `Audio.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.audio.<a href="/src/api/resources/tts/resources/audio/client/Client.ts">stream</a>({ ...params }) -> stream.Readable</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the stream speech for the given input

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
    accept: "audio/mpeg",
    input: "input",
    language: undefined,
    model: undefined,
    options: undefined,
    voiceId: "voice_id",
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

**requestOptions:** `Audio.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tts Auth

<details><summary><code>client.tts.auth.<a href="/src/api/resources/tts/resources/auth/client/Client.ts">createAccessToken</a>({ ...params }) -> Speechify.AccessToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

WARNING: This endpoint is deprecated. Create a new API token for the logged in user.

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
await client.tts.auth.createAccessToken({
    grantType: "client_credentials",
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

**request:** `Speechify.tts.CreateAccessTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

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

**requestOptions:** `Voices.RequestOptions`

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
    consent: "consent",
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

**requestOptions:** `Voices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.voices.<a href="/src/api/resources/tts/resources/voices/client/Client.ts">delete</a>(id, { ...params }) -> void</code></summary>
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
await client.tts.voices.delete("id");
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

**id:** `string` — The ID of the voice to delete

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DeleteVoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Voices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.voices.<a href="/src/api/resources/tts/resources/voices/client/Client.ts">downloadSample</a>(id, { ...params }) -> stream.Readable</code></summary>
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
await client.tts.voices.downloadSample("id");
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

**id:** `string` — The ID of the voice to download sample for

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DownloadSampleVoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Voices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tts Agents

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">list</a>() -> Speechify.ListAgentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List voice agents owned by the caller.

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
await client.tts.agents.list();
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

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">create</a>({ ...params }) -> Speechify.Agent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a voice agent.

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
await client.tts.agents.create({
    name: "name",
    voiceId: "voice_id",
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

**request:** `Speechify.tts.CreateAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">get</a>(id, { ...params }) -> Speechify.Agent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a voice agent by ID.

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
await client.tts.agents.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.GetAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">delete</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a voice agent. Conversations and attached tools remain.

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
await client.tts.agents.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DeleteAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">update</a>(id, { ...params }) -> Speechify.Agent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a voice agent. Only fields present on the request body are changed.

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
await client.tts.agents.update("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.UpdateAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">listTools</a>(id, { ...params }) -> Speechify.ListToolsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List tools currently attached to the agent.

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
await client.tts.agents.listTools("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.ListToolsAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">attachTool</a>(id, toolId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Attach an existing tool to the agent so the LLM can call it.

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
await client.tts.agents.attachTool("id", "toolId");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**toolId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.AttachToolAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">detachTool</a>(id, toolId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Detach a tool from the agent.

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
await client.tts.agents.detachTool("id", "toolId");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**toolId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DetachToolAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">getEvaluationConfig</a>(id, { ...params }) -> Speechify.EvaluationConfig</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the agent's post-call evaluation criteria + data-collection config.

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
await client.tts.agents.getEvaluationConfig("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.GetEvaluationConfigAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">updateEvaluationConfig</a>(id, { ...params }) -> Speechify.EvaluationConfig</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replace the agent's evaluation criteria + data-collection fields.

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
await client.tts.agents.updateEvaluationConfig("id", {
    criteria: [
        {
            id: "id",
            name: "name",
            description: "description",
        },
    ],
    dataCollection: [
        {
            key: "key",
            description: "description",
            type: "string",
        },
    ],
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.UpdateEvaluationConfigRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">getDynamicVariables</a>(id, { ...params }) -> Speechify.ListDynamicVariablesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the agent's customer-scope dynamic variables and the read-only
catalogue of reserved `system__*` keys. The system variables list is
provided so editor UIs can render the reference list without maintaining
a client-side copy of the catalogue.

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
await client.tts.agents.getDynamicVariables("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.GetDynamicVariablesAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">updateDynamicVariables</a>(id, { ...params }) -> Speechify.ListDynamicVariablesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replace the agent's customer-scope dynamic variable definitions.
The supplied list overwrites the stored list wholesale (same
semantics as `updateEvaluationConfig`). Pass an empty array to
clear all variables. Up to 20 variables per agent. Keys must
match `[a-zA-Z0-9_]+` and must not start with the reserved
`system__` prefix.

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
await client.tts.agents.updateDynamicVariables("id", {
    variables: [
        {
            key: "product_name",
            type: "string",
            default: "Speechify",
            description: "Product the agent is supporting.",
        },
        {
            key: "support_tier",
            type: "number",
            default: 1,
        },
        {
            key: "account_metadata",
            type: "json",
            description: "Arbitrary account context injected into tool bodies.",
        },
    ],
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.UpdateDynamicVariablesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">createConversation</a>(id, { ...params }) -> Speechify.CreateConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start a new voice conversation with the agent. Returns a realtime
voice session + short-lived client token so the caller can
connect the audio pipeline directly. The agent is dispatched
server-side; no additional client action required.

Pass `dynamic_variables` to supply per-session values that override
the agent's stored variable defaults for this one conversation.
Keys in the `system__` namespace are rejected at this boundary.

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
await client.tts.agents.createConversation("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.CreateConversationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">createSession</a>(id, { ...params }) -> Speechify.CreateConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mint a realtime voice session for the given agent. Widget-friendly
counterpart to `createConversation` — same response shape, dual
authentication:

- **Authenticated (Bearer)**: works for any agent the caller
  owns. Typical server-to-server flow where the embedding
  site's backend mints a token and hands it to the browser so
  the API key never reaches the client.
- **Unauthenticated**: works only when `agent.is_public = true`
  AND the request's `Origin` header matches `agent.allowed_origins`
  (or that list is empty). When `agent.hostname_allowlist` is
  non-empty, the `Origin` hostname must additionally be a
  member of that list. Used directly by the
  `<speechify-agent>` web component.

Responds with the same `CreateConversationResponse` as
`createConversation`.

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
await client.tts.agents.createSession("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.CreateSessionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">listAgentKnowledgeBases</a>(id, { ...params }) -> Speechify.ListKnowledgeBasesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List knowledge bases attached to an agent.

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
await client.tts.agents.listAgentKnowledgeBases("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.ListAgentKnowledgeBasesAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">attachKnowledgeBase</a>(id, kbId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Attach a knowledge base to an agent. The `search_knowledge` tool
is auto-registered on the next conversation and can only query the
attached knowledge bases.

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
await client.tts.agents.attachKnowledgeBase("id", "kbId");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**kbId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.AttachKnowledgeBaseAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">detachKnowledgeBase</a>(id, kbId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Detach a knowledge base from an agent.

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
await client.tts.agents.detachKnowledgeBase("id", "kbId");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**kbId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DetachKnowledgeBaseAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">listMemories</a>(id, { ...params }) -> Speechify.ListMemoriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List per-caller memories extracted for an agent. Memories are
written post-call by the built-in extractor when `memory_enabled`
is true on the agent; the list is sorted newest-first.

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
await client.tts.agents.listMemories("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.ListMemoriesAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">deleteMemoriesByCaller</a>(id, { ...params }) -> Speechify.DeleteMemoriesByCallerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete every memory ever extracted for a specific caller on
this agent. Privacy / GDPR surface. Returns the count of rows
soft-deleted; rows become permanently unreachable immediately
and are hard-deleted by the retention job after the tenant's
configured retention window.

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
await client.tts.agents.deleteMemoriesByCaller("id", {
    agentId: "agent_id",
    callerIdentity: "caller_identity",
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DeleteMemoriesByCallerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">listTests</a>(id, { ...params }) -> Speechify.ListAgentTestsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all tests configured for the agent. Each entry includes the
most recent run so the console can render pass/fail badges without
an extra round-trip.

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
await client.tts.agents.listTests("id");
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

**id:** `string` — Agent ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.ListTestsAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">createTest</a>(id, { ...params }) -> Speechify.AgentTest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new test for the agent.

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
await client.tts.agents.createTest("id", {
    name: "Greet the caller by name",
    description: "Agent should greet the caller using their name when provided.",
    type: "scenario",
    config: {
        context: "The caller says: Hi, I'm Alice.",
        successCriteria: "The agent greets Alice by name.",
        successExamples: ["Hi Alice! How can I help you today?"],
        failureExamples: ["Hello! How can I help you?"],
    },
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

**id:** `string` — Agent ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.CreateAgentTestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">runAllTests</a>(id, { ...params }) -> Speechify.RunAgentTestsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enqueue runs for every test on the agent concurrently. Up to 50
tests are dispatched in one call. Each returned run starts in
`queued` status; poll `GET /v1/test-runs/{id}` for the terminal
result.

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
await client.tts.agents.runAllTests("id");
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

**id:** `string` — Agent ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.RunAllTestsAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">getTest</a>(id, { ...params }) -> Speechify.AgentTest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a test by ID.

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
await client.tts.agents.getTest("id");
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

**id:** `string` — Test ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.GetTestAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">deleteTest</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a test and all its run history.

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
await client.tts.agents.deleteTest("id");
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

**id:** `string` — Test ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DeleteTestAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">updateTest</a>(id, { ...params }) -> Speechify.AgentTest</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a test. Only fields present on the request body are changed.

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
await client.tts.agents.updateTest("id");
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

**id:** `string` — Test ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.UpdateAgentTestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">listTestRuns</a>(id, { ...params }) -> Speechify.ListAgentTestRunsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the run history for a test, newest first.

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
await client.tts.agents.listTestRuns("id");
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

**id:** `string` — Test ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.ListTestRunsAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">runTest</a>(id, { ...params }) -> Speechify.AgentTestRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enqueue a single run of the test. The returned run starts in
`queued` status. Poll `GET /v1/test-runs/{id}` until the status
reaches a terminal state (`passed`, `failed`, or `error`).

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
await client.tts.agents.runTest("id");
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

**id:** `string` — Test ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.RunTestAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">getTestRun</a>(id, { ...params }) -> Speechify.AgentTestRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single test run by ID. Poll this endpoint until
`status` reaches a terminal state (`passed`, `failed`, or `error`).
The `result` field is populated on terminal states.

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
await client.tts.agents.getTestRun("id");
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

**id:** `string` — Test run ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.GetTestRunAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">listAllTests</a>({ ...params }) -> Speechify.ListTestsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Workspace-wide list of tests across every agent the caller owns.
Supports filters (agent, type, last-run status, folder), full-text
search on name/description, and cursor pagination. Each row carries
its newest run and attached agent IDs so the list renders without
N+1 round-trips.

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
await client.tts.agents.listAllTests();
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

**request:** `Speechify.tts.ListAllTestsAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">getTestStats</a>({ ...params }) -> Speechify.TestStats</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Aggregate pass-rate metrics over the last N days. Returns dense
daily buckets (one entry per day, zero-filled) plus totals and a
per-type breakdown. Powers the header chart on the global tests
page. Default window is 30 days, max 90.

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
await client.tts.agents.getTestStats();
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

**request:** `Speechify.tts.GetTestStatsAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">runTestsBatch</a>({ ...params }) -> Speechify.RunBatchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Queue runs for every (test, agent) pair in the body. Entries
without an `agent_id` fan out to every agent the test is
attached to. Total expanded runs are capped at 100 per call.
Each entry in the response is a queued run; poll
`GET /v1/test-runs/{id}` for each.

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
await client.tts.agents.runTestsBatch({
    entries: [
        {
            testId: "test_id",
        },
    ],
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

**request:** `Speechify.tts.RunBatchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">listTestAttachments</a>(id, { ...params }) -> Speechify.ListAgentTestAttachmentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List every agent a test is attached to.

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
await client.tts.agents.listTestAttachments("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.ListTestAttachmentsAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">attachTest</a>(id, agentId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Attach a test to an additional agent. After this call, the test
will also run as part of that agent's regression suite (and
against its prompt + tool config when invoked with
`agent_id = {agentId}`). Idempotent.

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
await client.tts.agents.attachTest("id", "agentId");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.AttachTestAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">detachTest</a>(id, agentId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Detach a test from an agent. The owner agent (the agent the test
was authored against) cannot be detached; delete the test
instead.

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
await client.tts.agents.detachTest("id", "agentId");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DetachTestAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">moveTest</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Move a test into a folder. Pass `folder_id: null` for root.

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
await client.tts.agents.moveTest("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.MoveAgentTestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">listTestFolders</a>() -> Speechify.ListAgentTestFoldersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List every test folder the caller owns. Flat list; build the tree client-side.

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
await client.tts.agents.listTestFolders();
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

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">createTestFolder</a>({ ...params }) -> Speechify.AgentTestFolder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a test folder. Max depth is 3.

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
await client.tts.agents.createTestFolder({
    name: "name",
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

**request:** `Speechify.tts.CreateAgentTestFolderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">deleteTestFolder</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft-delete a folder. Child tests drop back to root.

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
await client.tts.agents.deleteTestFolder("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DeleteTestFolderAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.agents.<a href="/src/api/resources/tts/resources/agents/client/Client.ts">updateTestFolder</a>(id, { ...params }) -> Speechify.AgentTestFolder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Rename or reparent a test folder. Cycles are rejected.

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
await client.tts.agents.updateTestFolder("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.UpdateAgentTestFolderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tts Tools

<details><summary><code>client.tts.tools.<a href="/src/api/resources/tts/resources/tools/client/Client.ts">list</a>() -> Speechify.ListToolsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List tools owned by the caller.

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
await client.tts.tools.list();
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

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.tools.<a href="/src/api/resources/tts/resources/tools/client/Client.ts">create</a>({ ...params }) -> Speechify.Tool</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a tool. For webhook tools, the response includes the HMAC
`webhook_secret` exactly once — store it immediately; subsequent
reads return a masked placeholder.

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
await client.tts.tools.create({
    name: "name",
    description: "description",
    kind: "system",
    config: {
        builtin: "end_call",
    },
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

**request:** `Speechify.tts.CreateToolRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.tools.<a href="/src/api/resources/tts/resources/tools/client/Client.ts">get</a>(id, { ...params }) -> Speechify.Tool</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a tool by ID. Webhook secrets are always masked here.

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
await client.tts.tools.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.GetToolsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.tools.<a href="/src/api/resources/tts/resources/tools/client/Client.ts">delete</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a tool. Agents that had it attached get a soft-detach.

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
await client.tts.tools.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DeleteToolsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.tools.<a href="/src/api/resources/tts/resources/tools/client/Client.ts">update</a>(id, { ...params }) -> Speechify.Tool</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a tool. Tool kind is immutable — create a new tool to change it.

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
await client.tts.tools.update("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.UpdateToolRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tts Conversations

<details><summary><code>client.tts.conversations.<a href="/src/api/resources/tts/resources/conversations/client/Client.ts">list</a>() -> Speechify.ListConversationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List conversations owned by the caller, ordered by most recent.

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
await client.tts.conversations.list();
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

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.conversations.<a href="/src/api/resources/tts/resources/conversations/client/Client.ts">stats</a>() -> Speechify.ConversationStats</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Aggregated counts and averages over the caller's conversations, scoped by the same filters as the list endpoint.

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
await client.tts.conversations.stats();
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

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.conversations.<a href="/src/api/resources/tts/resources/conversations/client/Client.ts">get</a>(id, { ...params }) -> Speechify.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a conversation by ID.

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
await client.tts.conversations.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.GetConversationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.conversations.<a href="/src/api/resources/tts/resources/conversations/client/Client.ts">listMessages</a>(id, { ...params }) -> Speechify.ListMessagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the full transcript for a conversation, in order.

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
await client.tts.conversations.listMessages("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.ListMessagesConversationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.conversations.<a href="/src/api/resources/tts/resources/conversations/client/Client.ts">listEvaluations</a>(id, { ...params }) -> Speechify.ListEvaluationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve post-call evaluation results for a conversation.

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
await client.tts.conversations.listEvaluations("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.ListEvaluationsConversationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.conversations.<a href="/src/api/resources/tts/resources/conversations/client/Client.ts">listMemories</a>(id, { ...params }) -> Speechify.ListMemoriesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List memories extracted from a specific conversation.

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
await client.tts.conversations.listMemories("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.ListMemoriesConversationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tts KnowledgeBases

<details><summary><code>client.tts.knowledgeBases.<a href="/src/api/resources/tts/resources/knowledgeBases/client/Client.ts">list</a>() -> Speechify.ListKnowledgeBasesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List knowledge bases owned by the caller.

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
await client.tts.knowledgeBases.list();
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

**requestOptions:** `KnowledgeBases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.knowledgeBases.<a href="/src/api/resources/tts/resources/knowledgeBases/client/Client.ts">create</a>({ ...params }) -> Speechify.KnowledgeBase</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new knowledge base.

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
await client.tts.knowledgeBases.create({
    name: "name",
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

**request:** `Speechify.tts.CreateKnowledgeBaseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.knowledgeBases.<a href="/src/api/resources/tts/resources/knowledgeBases/client/Client.ts">get</a>(id, { ...params }) -> Speechify.KnowledgeBase</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a knowledge base by ID.

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
await client.tts.knowledgeBases.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.GetKnowledgeBasesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.knowledgeBases.<a href="/src/api/resources/tts/resources/knowledgeBases/client/Client.ts">delete</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft-delete a knowledge base. Documents and chunks are cascaded.

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
await client.tts.knowledgeBases.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DeleteKnowledgeBasesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.knowledgeBases.<a href="/src/api/resources/tts/resources/knowledgeBases/client/Client.ts">update</a>(id, { ...params }) -> Speechify.KnowledgeBase</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a knowledge base.

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
await client.tts.knowledgeBases.update("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.UpdateKnowledgeBaseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.knowledgeBases.<a href="/src/api/resources/tts/resources/knowledgeBases/client/Client.ts">listDocuments</a>(id, { ...params }) -> Speechify.ListKnowledgeBaseDocumentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List documents ingested into a knowledge base.

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
await client.tts.knowledgeBases.listDocuments("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.ListDocumentsKnowledgeBasesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.knowledgeBases.<a href="/src/api/resources/tts/resources/knowledgeBases/client/Client.ts">uploadDocument</a>(id, { ...params }) -> Speechify.KnowledgeBaseDocument</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a document (PDF, plain text, markdown, or HTML) to a
knowledge base. The document is extracted, chunked, embedded, and
indexed synchronously; expect a few seconds per MB of input.
Maximum 10 MB per upload.

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
await client.tts.knowledgeBases.uploadDocument("id", {
    file: fs.createReadStream("/path/to/your/file"),
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.UploadDocumentKnowledgeBasesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.knowledgeBases.<a href="/src/api/resources/tts/resources/knowledgeBases/client/Client.ts">getDocument</a>(docId, { ...params }) -> Speechify.KnowledgeBaseDocument</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a document by ID.

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
await client.tts.knowledgeBases.getDocument("docId");
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

**docId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.GetDocumentKnowledgeBasesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.knowledgeBases.<a href="/src/api/resources/tts/resources/knowledgeBases/client/Client.ts">deleteDocument</a>(docId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a document and all its chunks.

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
await client.tts.knowledgeBases.deleteDocument("docId");
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

**docId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DeleteDocumentKnowledgeBasesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.knowledgeBases.<a href="/src/api/resources/tts/resources/knowledgeBases/client/Client.ts">listChunks</a>(docId, { ...params }) -> Speechify.ListKnowledgeBaseChunksResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the chunks for a document.

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
await client.tts.knowledgeBases.listChunks("docId");
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

**docId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.ListChunksKnowledgeBasesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.knowledgeBases.<a href="/src/api/resources/tts/resources/knowledgeBases/client/Client.ts">search</a>({ ...params }) -> Speechify.SearchKnowledgeBasesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Semantic search across a caller-owned list of knowledge bases.
Returns ranked chunks with source filename and a cosine-similarity
score. Limited to 50 results per request.

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
await client.tts.knowledgeBases.search({
    query: "query",
    kbIds: ["kb_ids"],
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

**request:** `Speechify.tts.SearchKnowledgeBasesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `KnowledgeBases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tts Memories

<details><summary><code>client.tts.memories.<a href="/src/api/resources/tts/resources/memories/client/Client.ts">delete</a>(memoryId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft-delete one memory row.

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
await client.tts.memories.delete("memoryId");
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

**memoryId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DeleteMemoriesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Memories.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tts PhoneNumbers

<details><summary><code>client.tts.phoneNumbers.<a href="/src/api/resources/tts/resources/phoneNumbers/client/Client.ts">list</a>() -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all phone numbers in the caller's workspace.

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
await client.tts.phoneNumbers.list();
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

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.phoneNumbers.<a href="/src/api/resources/tts/resources/phoneNumbers/client/Client.ts">import</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Import a phone number into the workspace. The `source` field
determines the provisioning path:

- `livekit` - LiveKit purchases the number on your behalf. US
  inbound only. Quickest path for local testing.
- `twilio` - Provide your Twilio Account SID, Auth Token, and
  the E.164 number you already own. We provision an Elastic SIP
  Trunk on your Twilio account automatically.
- `byoc` - Provide an existing SIP trunk ID. The number is
  registered against that trunk.

Returns 402 when the workspace has reached the 100-number cap.

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
await client.tts.phoneNumbers.import({
    key: "value",
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

**request:** `unknown`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.phoneNumbers.<a href="/src/api/resources/tts/resources/phoneNumbers/client/Client.ts">get</a>(id, { ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a phone number by ID.

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
await client.tts.phoneNumbers.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.GetPhoneNumbersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.phoneNumbers.<a href="/src/api/resources/tts/resources/phoneNumbers/client/Client.ts">delete</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a phone number from the workspace. For Twilio and LiveKit
numbers this also deprovisions the backing SIP trunk and dispatch
rule on LiveKit Cloud.

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
await client.tts.phoneNumbers.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DeletePhoneNumbersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.phoneNumbers.<a href="/src/api/resources/tts/resources/phoneNumbers/client/Client.ts">update</a>(id, { ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a phone number. Only `label` and `agent_id` are mutable;
`source` and `e164` are immutable after import. Pass `null` for
`agent_id` to unbind the number from its current agent.

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
await client.tts.phoneNumbers.update("id", {
    body: {
        key: "value",
    },
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.UpdatePhoneNumbersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tts SipTrunks

<details><summary><code>client.tts.sipTrunks.<a href="/src/api/resources/tts/resources/sipTrunks/client/Client.ts">list</a>() -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all SIP trunks in the caller's workspace.

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
await client.tts.sipTrunks.list();
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

**requestOptions:** `SipTrunks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.sipTrunks.<a href="/src/api/resources/tts/resources/sipTrunks/client/Client.ts">create</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a SIP trunk. For `kind=byoc` supply `sip_address` plus
optional digest credentials and IP allowlist. For `kind=twilio`
use `ImportPhoneNumber` with a `twilio` spec instead - trunk
creation is handled automatically. Returns 402 when the workspace
has reached the 20-trunk cap.

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
await client.tts.sipTrunks.create({
    key: "value",
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

**request:** `unknown`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SipTrunks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.sipTrunks.<a href="/src/api/resources/tts/resources/sipTrunks/client/Client.ts">get</a>(id, { ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a SIP trunk by ID.

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
await client.tts.sipTrunks.get("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.GetSipTrunksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SipTrunks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.sipTrunks.<a href="/src/api/resources/tts/resources/sipTrunks/client/Client.ts">delete</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a SIP trunk. This also removes the backing LiveKit inbound
trunk, outbound trunk, and dispatch rule if they were provisioned
by us. Phone numbers attached to this trunk are left in place but
become non-functional until rebound to a new trunk.

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
await client.tts.sipTrunks.delete("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.DeleteSipTrunksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SipTrunks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tts OutboundCalls

<details><summary><code>client.tts.outboundCalls.<a href="/src/api/resources/tts/resources/outboundCalls/client/Client.ts">create</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Place an outbound call from an agent to a phone number. LiveKit
originates the SIP INVITE through the outbound trunk bound to the
agent's workspace; the agent worker is dispatched into the room
automatically.

The response is returned as soon as LiveKit accepts the INVITE.
Poll `GET /v1/conversations/{conversation_id}` for status
transitions: `pending` → `active` (answered) → `completed`.

Requires a Twilio or BYOC trunk. LiveKit-native numbers are
inbound-only.

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
await client.tts.outboundCalls.create({
    key: "value",
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

**request:** `unknown`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OutboundCalls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tts Workspaces

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">list</a>() -> Speechify.TenantsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List every workspace the authenticated user belongs to. Powers the workspace switcher.

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
await client.tts.workspaces.list();
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

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">create</a>({ ...params }) -> Speechify.Tenant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new workspace with the authenticated user as owner.
The caller must switch their active workspace client-side via
the `X-Tenant-ID` header to act on the new tenant.

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
await client.tts.workspaces.create();
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

**request:** `Speechify.tts.CreateWorkspaceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">getCurrent</a>() -> Speechify.Tenant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the workspace currently selected by the caller (via `X-Tenant-ID` or auto-resolved).

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
await client.tts.workspaces.getCurrent();
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

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">updateCurrent</a>({ ...params }) -> Speechify.Tenant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Rename the current workspace. Owner or admin only.

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
await client.tts.workspaces.updateCurrent({
    name: "name",
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

**request:** `Speechify.tts.UpdateWorkspaceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">listMembers</a>() -> Speechify.MembersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List every member of the current workspace. Any member may call this.

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
await client.tts.workspaces.listMembers();
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

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">leave</a>() -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove the authenticated caller from the current workspace.
Refused with 409 when the caller is the last owner — promote
another member to owner first.

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
await client.tts.workspaces.leave();
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

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">removeMember</a>(userUid, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove a member from the current workspace. Owner or admin
only. The caller cannot remove themselves — use
`POST /v1/tenants/current/members/leave` instead.

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
await client.tts.workspaces.removeMember("user_uid");
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

**userUid:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.RemoveMemberWorkspacesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">updateMemberRole</a>(userUid, { ...params }) -> Speechify.Member</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Change a member's role. Owner only — admins may add or remove
members but may not change roles. Refused with 409 when
demoting the last remaining owner.

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
await client.tts.workspaces.updateMemberRole("user_uid", {
    role: "owner",
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

**userUid:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.UpdateMemberRoleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">listInvites</a>() -> Speechify.InvitesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List outstanding invites for the current workspace. Invite tokens are redacted.

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
await client.tts.workspaces.listInvites();
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

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">createInvite</a>({ ...params }) -> Speechify.Invite</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an invite to the current workspace. Owner or admin only.
The response contains the invite token ONCE — subsequent list
calls redact it.

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
await client.tts.workspaces.createInvite({
    email: "email",
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

**request:** `Speechify.tts.CreateInviteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">revokeInvite</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revoke an outstanding invite. Owner or admin only. Idempotent.

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
await client.tts.workspaces.revokeInvite("id");
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.RevokeInviteWorkspacesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">acceptInvite</a>(token, { ...params }) -> Speechify.Tenant</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Accept a workspace invite. The authenticated caller is joined
to the invite's workspace as a member. Expired, revoked, or
already-accepted tokens return 404 to avoid token enumeration.

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
await client.tts.workspaces.acceptInvite("token");
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

**token:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.AcceptInviteWorkspacesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">previewInvite</a>(token, { ...params }) -> Speechify.InvitePreview</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Preview a workspace invite without authenticating. Returns the
workspace name, inviter details, and expiry so the `/join/{token}`
page can render before the recipient signs in. Anyone with the
token can already accept, so this endpoint deliberately surfaces
the same information a caller would see after accepting. Invalid
tokens (unknown, expired, revoked, already-accepted, or pointing
at a soft-deleted workspace) collapse to a single 404 to prevent
enumeration.

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
await client.tts.workspaces.previewInvite("token");
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

**token:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.tts.PreviewInviteWorkspacesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tts.workspaces.<a href="/src/api/resources/tts/resources/workspaces/client/Client.ts">transferWorkspaceOwner</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Transfer ownership of the current workspace atomically. Promotes
the target member to owner and demotes the caller to admin in a
single transaction. Owner-only; admins cannot hand off a role
they were never granted. Prefer this over two PATCH calls to
`/v1/tenants/current/members/{user_uid}`: a sole-owner caller
cannot demote themselves first without tripping the last-owner
guard, which this endpoint sidesteps by promoting before
demoting.

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
await client.tts.workspaces.transferWorkspaceOwner({
    userUid: "user_uid",
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

**request:** `Speechify.tts.TransferOwnershipRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workspaces.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
