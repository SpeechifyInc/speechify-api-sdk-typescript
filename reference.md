# Reference

## Agent

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">list</a>() -> Speechify.ListAgentsResponse</code></summary>
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
await client.agent.list();
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

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">create</a>({ ...params }) -> Speechify.Agent</code></summary>
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
await client.agent.create({
    name: "name",
    prompt: "prompt",
    firstMessage: "first_message",
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

**request:** `Speechify.CreateAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">listAgentVoices</a>() -> Speechify.AgentVoice[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the curated voice catalogue available for voice agents.
Matches the `ai-api-agents` VMS scope one-for-one, so the same
slug set is accepted by POST/PATCH /v1/agents. Personal
(cloned) voices are NOT included — they stay on
`GET /v1/voices`. The JSON layout intentionally mirrors the
TTS `/v1/voices` shape so the console feeds both endpoints
into the same voice-picker component.

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
await client.agent.listAgentVoices();
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

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">get</a>(id, { ...params }) -> Speechify.Agent</code></summary>
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
await client.agent.get("id");
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

**request:** `Speechify.GetAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">delete</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a voice agent. Conversations and attached tools remain. Tests whose only agent is this one are deleted with it; tests also attached to other agents survive, minus the attachment.

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
await client.agent.delete("id");
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

**request:** `Speechify.DeleteAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">update</a>(id, { ...params }) -> Speechify.Agent</code></summary>
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
await client.agent.update("id");
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

**request:** `Speechify.UpdateAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">listTools</a>(id, { ...params }) -> Speechify.AttachedToolsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List tools currently attached to the agent. Bare list — an
agent's tool attachment count is bounded by configuration, so
this endpoint does not paginate.

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
await client.agent.listTools("id");
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

**request:** `Speechify.ListToolsAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">attachTool</a>(id, toolId, { ...params }) -> void</code></summary>
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
await client.agent.attachTool("id", "toolId");
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

**request:** `Speechify.AttachToolAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">detachTool</a>(id, toolId, { ...params }) -> void</code></summary>
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
await client.agent.detachTool("id", "toolId");
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

**request:** `Speechify.DetachToolAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">getEvaluationConfig</a>(id, { ...params }) -> Speechify.EvaluationConfig</code></summary>
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
await client.agent.getEvaluationConfig("id");
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

**request:** `Speechify.GetEvaluationConfigAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">updateEvaluationConfig</a>(id, { ...params }) -> Speechify.EvaluationConfig</code></summary>
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
await client.agent.updateEvaluationConfig("id", {
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

**request:** `Speechify.UpdateEvaluationConfigRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">getDynamicVariables</a>(id, { ...params }) -> Speechify.ListDynamicVariablesResponse</code></summary>
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
await client.agent.getDynamicVariables("id");
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

**request:** `Speechify.GetDynamicVariablesAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">updateDynamicVariables</a>(id, { ...params }) -> Speechify.ListDynamicVariablesResponse</code></summary>
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
await client.agent.updateDynamicVariables("id", {
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

**request:** `Speechify.UpdateDynamicVariablesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">listBuiltins</a>(id, { ...params }) -> Speechify.ListAgentBuiltinsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List every builtin instance configured on this agent. Each row
is one instance of a worker-resident capability (`end_call`,
`play_audio`, etc.) bound to this specific agent with its own
LLM-facing name, description, and per-call config. Same builtin
may appear N times on one agent — typically two `play_audio`
rows bound to different audio assets.

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
await client.agent.listBuiltins("id");
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

**request:** `Speechify.ListBuiltinsAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">createBuiltin</a>(id, { ...params }) -> Speechify.AgentBuiltin</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new builtin instance on this agent. `builtin` must
resolve to one of the names returned by
`GET /v1/agents/tools/system-builtins`; unknown values are rejected.
`name` is the LLM-facing identifier the model uses to call the
tool; it must match the tool-name regex and be unique within
the agent's builtin set.

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
await client.agent.createBuiltin("id", {
    builtin: "builtin",
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

**id:** `string` — Agent ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.CreateAgentBuiltinRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">getBuiltin</a>(id, builtinId, { ...params }) -> Speechify.AgentBuiltin</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch one builtin instance by ID.

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
await client.agent.getBuiltin("id", "builtinId");
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

**builtinId:** `string` — Agent builtin instance ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.GetBuiltinAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">deleteBuiltin</a>(id, builtinId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a builtin instance from this agent. Idempotent on
already-deleted ids (404). Does NOT detach references from
flow nodes that name the instance; the worker logs and skips
on missing-row at session start (fail-soft).

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
await client.agent.deleteBuiltin("id", "builtinId");
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

**builtinId:** `string` — Agent builtin instance ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.DeleteBuiltinAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">updateBuiltin</a>(id, builtinId, { ...params }) -> Speechify.AgentBuiltin</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a builtin instance. All fields optional; omitting a
field leaves it unchanged. The underlying `builtin` (which
capability the instance maps to) is intentionally NOT
patchable — change of identity would surprise the worker, so
the customer should delete and recreate instead.

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
await client.agent.updateBuiltin("id", "builtinId");
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

**builtinId:** `string` — Agent builtin instance ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.UpdateAgentBuiltinRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">createConversation</a>(id, { ...params }) -> Speechify.CreateConversationResponse</code></summary>
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
await client.agent.createConversation("agent_01HS...");
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

**request:** `Speechify.CreateConversationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">createSession</a>(id, { ...params }) -> Speechify.CreateConversationResponse</code></summary>
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
await client.agent.createSession("id");
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

**request:** `Speechify.CreateSessionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">listAgentKnowledgeBases</a>(id, { ...params }) -> Speechify.AttachedKnowledgeBasesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List knowledge bases attached to an agent. Bare list — the
attachment count is bounded by configuration, not by data
scale, so this endpoint does not paginate.

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
await client.agent.listAgentKnowledgeBases("id");
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

**request:** `Speechify.ListAgentKnowledgeBasesAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">attachKnowledgeBase</a>(id, kbId, { ...params }) -> void</code></summary>
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
await client.agent.attachKnowledgeBase("id", "kbId");
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

**request:** `Speechify.AttachKnowledgeBaseAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">detachKnowledgeBase</a>(id, kbId, { ...params }) -> void</code></summary>
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
await client.agent.detachKnowledgeBase("id", "kbId");
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

**request:** `Speechify.DetachKnowledgeBaseAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">listMemories</a>(id, { ...params }) -> Speechify.ListMemoriesResponse</code></summary>
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
await client.agent.listMemories("id");
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

**request:** `Speechify.ListMemoriesAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">deleteMemoriesByCaller</a>(id, { ...params }) -> Speechify.DeleteMemoriesByCallerResponse</code></summary>
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
await client.agent.deleteMemoriesByCaller("id", {
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

**request:** `Speechify.DeleteMemoriesByCallerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">listTests</a>(id, { ...params }) -> Speechify.ListAgentTestsResponse</code></summary>
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
await client.agent.listTests("id");
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

**request:** `Speechify.ListTestsAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">createTest</a>(id, { ...params }) -> Speechify.AgentTest</code></summary>
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
await client.agent.createTest("agent_01HS...", {
    name: "Greet caller by name",
    description: "Agent should use the caller's name when it is provided.",
    type: "reply",
    config: {
        context: "Hi, I am Alice. I need help with my order.",
        successCriteria: "The agent addresses Alice by name in its response.",
        successExamples: [
            "Hi Alice! I would be happy to help with your order.",
            "Sure thing, Alice - let me look that up for you.",
        ],
        failureExamples: ["Hello! How can I help you today?", "I can help you with that order."],
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

**request:** `Speechify.CreateAgentTestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">runAllTests</a>(id, { ...params }) -> Speechify.RunAgentTestsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enqueue runs for every test on the agent concurrently. Up to 50
tests are dispatched in one call. Each returned run starts in
`queued` status; poll `GET /v1/agents/tests/runs/{id}` for the terminal
result.

An optional request body runs the whole suite against
a proposed config: a `config_override` (prompt / model / tools)
applied to every test without editing the tests, and/or a
`flow_version_id` to target a specific flow version instead of
the agent's active flow. Omit the body to run against the
agent's live config and active flow.

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
await client.agent.runAllTests("id");
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

**request:** `Speechify.RunAllTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.<a href="/src/api/resources/agent/client/Client.ts">getWidgetConfig</a>(id, { ...params }) -> Speechify.WidgetConfig</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return the embed-widget appearance config for an agent. Works
unauthenticated for public agents; the body is cosmetic only.

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
await client.agent.getWidgetConfig("agent_01k7m6etzwf057j6w0zmdsgppr");
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

**id:** `string` — Prefixed agent id.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.GetWidgetConfigAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agent Tools

<details><summary><code>client.agent.tools.<a href="/src/api/resources/agent/resources/tools/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Speechify.Tool&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List tools in the caller's workspace, most recently updated
first. Cursor-paginated: omit `cursor` to fetch the first page.
Default page size is 50 and max is 200. Walk pages while
`has_more` is true.

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
const response = await client.agent.tools.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.tools.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListToolsRequest`

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

<details><summary><code>client.agent.tools.<a href="/src/api/resources/agent/resources/tools/client/Client.ts">create</a>({ ...params }) -> Speechify.Tool</code></summary>
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
await client.agent.tools.create({
    name: "lookup_order",
    description: "Fetch order details by order ID.",
    kind: "webhook",
    config: {
        url: "https://api.your-app.com/webhooks/lookup-order",
        method: "POST",
        timeoutMs: 5000,
        headers: {
            "X-Org-ID": "acme",
        },
        params: [
            {
                name: "order_id",
                type: "string",
                description: "Order ID",
                required: true,
            },
        ],
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

**request:** `Speechify.agent.CreateToolRequest`

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

<details><summary><code>client.agent.tools.<a href="/src/api/resources/agent/resources/tools/client/Client.ts">get</a>(id, { ...params }) -> Speechify.Tool</code></summary>
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
await client.agent.tools.get("id");
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

**request:** `Speechify.agent.GetToolsRequest`

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

<details><summary><code>client.agent.tools.<a href="/src/api/resources/agent/resources/tools/client/Client.ts">delete</a>(id, { ...params }) -> void</code></summary>
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
await client.agent.tools.delete("id");
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

**request:** `Speechify.agent.DeleteToolsRequest`

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

<details><summary><code>client.agent.tools.<a href="/src/api/resources/agent/resources/tools/client/Client.ts">update</a>(id, { ...params }) -> Speechify.Tool</code></summary>
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
await client.agent.tools.update("id");
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

**request:** `Speechify.agent.UpdateToolRequest`

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

<details><summary><code>client.agent.tools.<a href="/src/api/resources/agent/resources/tools/client/Client.ts">listAttachedAgents</a>(id, { ...params }) -> Speechify.ListToolAttachedAgentsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the agents in the caller's workspace that currently have
this tool attached. Useful before deleting a tool, to surface
which agents will lose access. Soft-deleted agents are filtered
out. Bounded by the number of agents per workspace (tens), so
the response is not paginated.

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
await client.agent.tools.listAttachedAgents("id");
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

**request:** `Speechify.agent.ListAttachedAgentsToolsRequest`

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

<details><summary><code>client.agent.tools.<a href="/src/api/resources/agent/resources/tools/client/Client.ts">rotateSecret</a>(id, { ...params }) -> Speechify.Tool</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Rotate the HMAC signing secret on a webhook tool. The tool id
is preserved so attached agents keep working; only the secret
rolls. The new plaintext is returned on `webhook_secret`
exactly once — store it immediately, subsequent reads always
return the masked placeholder. The previous secret is
invalidated immediately on success.

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
await client.agent.tools.rotateSecret("id");
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

**request:** `Speechify.agent.RotateSecretToolsRequest`

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

<details><summary><code>client.agent.tools.<a href="/src/api/resources/agent/resources/tools/client/Client.ts">listSystemBuiltins</a>() -> Speechify.ListSystemBuiltinsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Read-only catalogue of every system builtin the worker knows
about. The console fetches this at runtime rather than
maintaining a parallel client-side list; the server
is the single source of truth for the label and description
copy a customer sees in the builtin-instance picker.

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
await client.agent.tools.listSystemBuiltins();
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

<details><summary><code>client.agent.tools.<a href="/src/api/resources/agent/resources/tools/client/Client.ts">testMcpConnection</a>({ ...params }) -> Speechify.McpProbeResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Probe a customer-supplied MCP server config without persisting
anything. The server opens the configured transport, runs the
`initialize` + `list_tools` handshake, and returns either the
discovered tool catalogue or a structured error string. Pass
`tool_id` from the edit-form flow when the auth payload carries
`_set` markers but no plaintext, so the server can hydrate the
stored secret from the encrypted column before probing.

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
await client.agent.tools.testMcpConnection({
    config: {
        endpoint: "endpoint",
        auth: {
            type: "none",
        },
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

**request:** `Speechify.agent.TestMcpConnectionRequest`

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

<details><summary><code>client.agent.tools.<a href="/src/api/resources/agent/resources/tools/client/Client.ts">testWebhookConnection</a>({ ...params }) -> Speechify.WebhookProbeResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Probe a customer-supplied webhook tool config without persisting
anything. The server fires the exact request shape the worker
sends on a real invocation — same JSON body, same HMAC-SHA256
signature — with an empty argument set, and reports the
endpoint's status code, latency, and a truncated response body,
or a transport-level failure reason. The probe carries an
`X-Speechify-Webhook-Test: true` header so a careful endpoint
can recognise the test and skip its real side effect. Pass
`tool_id` from the edit-form flow so the server signs the probe
with the tool's stored HMAC secret.

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
await client.agent.tools.testWebhookConnection({
    config: {
        url: "url",
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

**request:** `Speechify.agent.TestWebhookConnectionRequest`

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

## Agent AudioAssets

<details><summary><code>client.agent.audioAssets.<a href="/src/api/resources/agent/resources/audioAssets/client/Client.ts">list</a>() -> Speechify.ListAudioAssetsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List every non-deleted audio asset in the caller's workspace.
Audio assets are pre-recorded WAV clips (intro jingles, legal
disclaimers, hold cues) referenced from `play_audio` flow nodes
and the corresponding system builtin.

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
await client.agent.audioAssets.list();
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

**requestOptions:** `AudioAssets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.audioAssets.<a href="/src/api/resources/agent/resources/audioAssets/client/Client.ts">upload</a>({ ...params }) -> Speechify.UploadAudioAssetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a new audio asset. The body is a multipart/form-data
request with a single `file` field carrying the WAV bytes.

The WAV is validated server-side against a strict format
contract — PCM 16-bit signed, mono, 48000 Hz, ≤30s, ≤4 MiB —
before any bytes hit storage. The strict shape matches the
LiveKit room sample rate so the worker reads bytes straight
into `rtc.AudioFrame` with no decode dependency on either side;
convert MP3 sources with `ffmpeg -i in.mp3 -ar 48000 -ac 1
-sample_fmt s16 out.wav`.

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
await client.agent.audioAssets.upload({
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

**request:** `Speechify.agent.UploadAudioAssetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudioAssets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.audioAssets.<a href="/src/api/resources/agent/resources/audioAssets/client/Client.ts">get</a>(id, { ...params }) -> Speechify.AudioAsset</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch one audio asset's metadata. Returns 404 for missing,
soft-deleted, or foreign-tenant assets — existence information
is never leaked across tenants.

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
await client.agent.audioAssets.get("id");
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

**id:** `string` — Audio asset ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.GetAudioAssetsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudioAssets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.audioAssets.<a href="/src/api/resources/agent/resources/audioAssets/client/Client.ts">delete</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft-delete an audio asset. The underlying GCS object is
retained so any flow node or tool still referencing the asset
keeps working until the config is updated; the worker logs
and skips on missing-row at session start (fail-soft).

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
await client.agent.audioAssets.delete("id");
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

**id:** `string` — Audio asset ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.DeleteAudioAssetsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudioAssets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.audioAssets.<a href="/src/api/resources/agent/resources/audioAssets/client/Client.ts">getBytes</a>(id, { ...params }) -> stream.Readable</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stream the raw WAV bytes for an audio asset. Byte-stream
sibling of the metadata endpoint at /v1/agents/audio-assets/{id}.
The LiveKit worker fetches through here for the play_audio
builtin; SDK consumers can also download originals. Returns 404
for missing / soft-deleted / foreign-tenant assets.

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
await client.agent.audioAssets.getBytes("id");
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

**id:** `string` — Audio asset ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.GetBytesAudioAssetsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AudioAssets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agent IvrMemory

<details><summary><code>client.agent.ivrMemory.<a href="/src/api/resources/agent/resources/ivrMemory/client/Client.ts">list</a>({ ...params }) -> Speechify.ListIvrMenusResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the active IVR menus the caller's workspace has learned.
One row per (fingerprint, tenant).
Invalidated rows and the cross-tenant shared slot are excluded.
Sorted by `last_observed_at` DESC so the freshest IVRs land at
the top. Capped at 200 rows.

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
await client.agent.ivrMemory.list();
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

**request:** `Speechify.agent.ListIvrMemoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IvrMemory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.ivrMemory.<a href="/src/api/resources/agent/resources/ivrMemory/client/Client.ts">get</a>(id, { ...params }) -> Speechify.IvrMenu</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch one menu's full shape. Returns 404 for missing,
soft-deleted, or foreign-tenant menus — existence information
is never leaked across tenants.

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
await client.agent.ivrMemory.get("id");
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

**id:** `string` — IVR menu ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.GetIvrMemoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IvrMemory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.ivrMemory.<a href="/src/api/resources/agent/resources/ivrMemory/client/Client.ts">updateLabel</a>(id, { ...params }) -> Speechify.IvrMenu</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Re-label one option in the stored menu_tree, matched on the
supplied DTMF value. The label is what the console displays in
the detail panel and what the worker reads back at navigate
time to surface the option semantically. Unknown DTMF values
are a no-op (the response echoes the unchanged menu).

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
await client.agent.ivrMemory.updateLabel("id", {
    dtmf: "dtmf",
    label: "label",
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

**id:** `string` — IVR menu ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.UpdateIvrMenuLabelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IvrMemory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.ivrMemory.<a href="/src/api/resources/agent/resources/ivrMemory/client/Client.ts">invalidate</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft-invalidate the named menu. Future lookups skip it; the
next discovery for the same fingerprint replaces it (clearing
the invalidation). Idempotent: re-invalidating
an already-invalidated row returns 404.

Reason is optional and is captured in structured logs for
operator triage. A future audit table may persist it.

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
await client.agent.ivrMemory.invalidate("id");
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

**id:** `string` — IVR menu ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.InvalidateIvrMenuRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IvrMemory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agent Callers

<details><summary><code>client.agent.callers.<a href="/src/api/resources/agent/resources/callers/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Speechify.Caller&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the workspace's callers, ordered by most-recently-seen first.
A caller is the per-(tenant, agent, identity) entity that owns
long-term memories and conversation history.

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
const response = await client.agent.callers.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.callers.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListCallersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Callers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.callers.<a href="/src/api/resources/agent/resources/callers/client/Client.ts">get</a>(id, { ...params }) -> Speechify.GetCallerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a single caller by id. Returns 404 for soft-deleted or
foreign-tenant rows — GDPR-purged callers appear as "not found"
to the API.

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
await client.agent.callers.get("id");
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

**id:** `string` — Caller ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.GetCallersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Callers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.callers.<a href="/src/api/resources/agent/resources/callers/client/Client.ts">delete</a>(id, { ...params }) -> Speechify.DeleteCallerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Soft-delete the caller AND cascade soft-delete every memory row
pointing at it. Conversations survive (forensic / billing records)
but their caller pointer surfaces as "deleted" through the API.

Idempotent — re-deleting an already-purged caller returns
`{caller_purged: 0, memories_purged: 0}`. Audit row counts
accompany every response so a privacy operator has direct
evidence of the purge without re-querying.

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
await client.agent.callers.delete("id");
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

**id:** `string` — Caller ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.DeleteCallersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Callers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.callers.<a href="/src/api/resources/agent/resources/callers/client/Client.ts">update</a>(id, { ...params }) -> Speechify.GetCallerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the customer-editable fields on a caller. PATCH semantics:
omitted fields are unchanged, present fields overwrite. To clear
a nullable field (`display_name`, `external_ref`) pass an empty
string. `metadata` REPLACES the existing JSONB blob when supplied.

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
await client.agent.callers.update("id");
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

**id:** `string` — Caller ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.UpdateCallerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Callers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.callers.<a href="/src/api/resources/agent/resources/callers/client/Client.ts">listMemories</a>(id, { ...params }) -> core.Page&lt;Speechify.CallerMemoryItem&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List one page of memories belonging to the caller, newest first.
Soft-deleted memories AND memories whose parent caller is
soft-deleted are hidden — the GDPR purge semantics require the
API to behave as if those rows do not exist.

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
const response = await client.agent.callers.listMemories("id");
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.callers.listMemories("id");
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**id:** `string` — Caller ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.ListMemoriesCallersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Callers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.callers.<a href="/src/api/resources/agent/resources/callers/client/Client.ts">listConversations</a>(id, { ...params }) -> core.Page&lt;Speechify.Conversation&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List one page of conversations belonging to the caller, newest
started first. Same wire envelope as the workspace-wide
`GET /v1/agents/conversations`, narrowed to one caller.

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
const response = await client.agent.callers.listConversations("id");
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.callers.listConversations("id");
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**id:** `string` — Caller ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.ListConversationsCallersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Callers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agent Conversations

<details><summary><code>client.agent.conversations.<a href="/src/api/resources/agent/resources/conversations/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Speechify.Conversation&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List conversations owned by the caller, ordered by most recent.
Cursor-paginated: omit `cursor` to fetch the first page; pass the
previous response's `next_cursor` back to fetch the next page.
Walk pages while `has_more` is true.

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
const response = await client.agent.conversations.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.conversations.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListConversationsRequest`

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

<details><summary><code>client.agent.conversations.<a href="/src/api/resources/agent/resources/conversations/client/Client.ts">stats</a>({ ...params }) -> Speechify.ConversationStats</code></summary>
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
await client.agent.conversations.stats();
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

**request:** `Speechify.agent.StatsConversationsRequest`

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

<details><summary><code>client.agent.conversations.<a href="/src/api/resources/agent/resources/conversations/client/Client.ts">recentCallees</a>({ ...params }) -> core.Page&lt;Speechify.RecentCallee&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Distinct phone numbers the caller's workspace has dialled on
outbound calls, ordered by most recent. Feeds the batch-calls
composer's "Suggested from history" surface. Cursor-paginated:
omit `cursor` to fetch the first page. Default page size is 50
and max is 200. Walk pages while `has_more` is true.

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
const response = await client.agent.conversations.recentCallees();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.conversations.recentCallees();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.RecentCalleesConversationsRequest`

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

<details><summary><code>client.agent.conversations.<a href="/src/api/resources/agent/resources/conversations/client/Client.ts">get</a>(id, { ...params }) -> Speechify.Conversation</code></summary>
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
await client.agent.conversations.get("id");
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

**request:** `Speechify.agent.GetConversationsRequest`

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

<details><summary><code>client.agent.conversations.<a href="/src/api/resources/agent/resources/conversations/client/Client.ts">listMessages</a>(id, { ...params }) -> core.Page&lt;Speechify.Message&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the transcript for a conversation in started_at order
(oldest first). Cursor-paginated: omit `cursor` to fetch the
first page. Default page size is 50 and max is 200. Walk pages
while `has_more` is true.

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
const response = await client.agent.conversations.listMessages("id");
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.conversations.listMessages("id");
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListMessagesConversationsRequest`

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

<details><summary><code>client.agent.conversations.<a href="/src/api/resources/agent/resources/conversations/client/Client.ts">listEvaluations</a>(id, { ...params }) -> Speechify.ListEvaluationsResponse</code></summary>
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
await client.agent.conversations.listEvaluations("id");
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

**request:** `Speechify.agent.ListEvaluationsConversationsRequest`

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

<details><summary><code>client.agent.conversations.<a href="/src/api/resources/agent/resources/conversations/client/Client.ts">streamRecording</a>(id, { ...params }) -> stream.Readable</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Proxy the GCS-stored audio recording for a conversation through
the Cloud Run service identity. Returns OGG/Opus bytes (LiveKit
room-composite egress default). The response is streamed so a
long recording does not buffer in memory; `<audio src>` consumers
can seek directly. Only present when the agent had
`save_audio_recording` enabled at session start.

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
await client.agent.conversations.streamRecording("id");
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

**request:** `Speechify.agent.StreamRecordingConversationsRequest`

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

<details><summary><code>client.agent.conversations.<a href="/src/api/resources/agent/resources/conversations/client/Client.ts">listWebhookDeliveries</a>(id, { ...params }) -> core.Page&lt;Speechify.WebhookDelivery&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List post-call webhook delivery attempts for a conversation,
newest first. Rows appear once the LiveKit `room_finished`
webhook has fired and the post-call webhook has been
dispatched to the agent's configured URL. One row per
`(conversation, webhook-url)`, updated in place across retries.
Cursor-paginated: omit `cursor` to fetch the first page.
Default page size is 50 and max is 200. Walk pages while
`has_more` is true.

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
const response = await client.agent.conversations.listWebhookDeliveries("id");
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.conversations.listWebhookDeliveries("id");
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListWebhookDeliveriesConversationsRequest`

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

<details><summary><code>client.agent.conversations.<a href="/src/api/resources/agent/resources/conversations/client/Client.ts">listRetrievalLog</a>(id, { ...params }) -> core.Page&lt;Speechify.RetrievalLogEntry&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Per-conversation retrieval log, newest first — one row per
`search_knowledge` invocation made during the call. Each entry
records the query, ranked chunks (denormalised so deletions
don't render history unreadable), `top_k`, and hit count.
Powers the Retrieval panel on the conversation detail view.
Cursor-paginated: omit `cursor` to fetch the first page.
Default page size is 50 and max is 200. Walk pages while
`has_more` is true.

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
const response = await client.agent.conversations.listRetrievalLog("id");
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.conversations.listRetrievalLog("id");
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListRetrievalLogConversationsRequest`

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

<details><summary><code>client.agent.conversations.<a href="/src/api/resources/agent/resources/conversations/client/Client.ts">listMemories</a>(id, { ...params }) -> Speechify.ListMemoriesResponse</code></summary>
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
await client.agent.conversations.listMemories("id");
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

**request:** `Speechify.agent.ListMemoriesConversationsRequest`

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

## Agent Admin

<details><summary><code>client.agent.admin.<a href="/src/api/resources/agent/resources/admin/client/Client.ts">shadowToken</a>(id, { ...params }) -> Speechify.ShadowConversationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mint a listen-only LiveKit access token so an authorized observer
can join an ongoing voice-agent conversation as a hidden
participant. Caller must be an `owner` or `admin` of the
workspace the conversation belongs to. The token cannot publish
audio or data; the observer is invisible to the caller and the
agent. Speechify support engineers reach this endpoint the same
way as any other observer — by being granted the owner/admin
role on the customer's workspace (typically under an NDA-backed
support arrangement).

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
await client.agent.admin.shadowToken("id");
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

**request:** `Speechify.agent.ShadowTokenAdminRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Admin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.admin.<a href="/src/api/resources/agent/resources/admin/client/Client.ts">forceEnd</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Force-terminate the LiveKit room for an ongoing conversation.
Idempotent: rooms that LiveKit has already cleaned up return
204 the same as a successful first-time termination. Same
owner/admin role gating as the shadow-token endpoint.

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
await client.agent.admin.forceEnd("id");
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

**request:** `Speechify.agent.ForceEndAdminRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Admin.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agent KnowledgeBases

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Speechify.KnowledgeBase&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List knowledge bases owned by the caller. Cursor-paginated:
omit `cursor` to fetch the first page. The default page size is
50 and the max is 200; values outside that range are clamped.
Walk pages while `has_more` is true.

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
const response = await client.agent.knowledgeBases.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.knowledgeBases.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">create</a>({ ...params }) -> Speechify.KnowledgeBase</code></summary>
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
await client.agent.knowledgeBases.create({
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

**request:** `Speechify.agent.CreateKnowledgeBaseRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">get</a>(id, { ...params }) -> Speechify.KnowledgeBase</code></summary>
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
await client.agent.knowledgeBases.get("id");
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

**request:** `Speechify.agent.GetKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">delete</a>(id, { ...params }) -> void</code></summary>
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
await client.agent.knowledgeBases.delete("id");
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

**request:** `Speechify.agent.DeleteKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">update</a>(id, { ...params }) -> Speechify.KnowledgeBase</code></summary>
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
await client.agent.knowledgeBases.update("id");
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

**request:** `Speechify.agent.UpdateKnowledgeBaseRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">listDocuments</a>(id, { ...params }) -> core.Page&lt;Speechify.KnowledgeBaseDocument&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List documents ingested into a knowledge base. Cursor-paginated:
omit `cursor` to fetch the first page. Default page size is 50
and max is 200. Walk pages while `has_more` is true.

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
const response = await client.agent.knowledgeBases.listDocuments("id");
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.knowledgeBases.listDocuments("id");
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListDocumentsKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">uploadDocument</a>(id, { ...params }) -> Speechify.KnowledgeBaseDocument</code></summary>
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
await client.agent.knowledgeBases.uploadDocument("id", {
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

**request:** `Speechify.agent.UploadDocumentKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">getDocument</a>(id, docId, { ...params }) -> Speechify.KnowledgeBaseDocumentDetail</code></summary>
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
await client.agent.knowledgeBases.getDocument("id", "docId");
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

**docId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.GetDocumentKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">deleteDocument</a>(id, docId, { ...params }) -> void</code></summary>
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
await client.agent.knowledgeBases.deleteDocument("id", "docId");
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

**docId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.DeleteDocumentKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">updateDocument</a>(id, docId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a document. Currently supports moving the document
between folders via `folder_id`.

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
await client.agent.knowledgeBases.updateDocument("id", "docId");
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

**docId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.UpdateDocumentKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">listChunks</a>(id, docId, { ...params }) -> core.Page&lt;Speechify.KnowledgeBaseChunk&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the chunks for a document. Cursor-paginated: omit `cursor`
to fetch the first page. Default page size is 50 and max is 200.
Walk pages while `has_more` is true.

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
const response = await client.agent.knowledgeBases.listChunks("id", "docId");
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.knowledgeBases.listChunks("id", "docId");
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**docId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.ListChunksKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">createTextDocument</a>(id, { ...params }) -> Speechify.KnowledgeBaseDocument</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a document from inline pasted text. Content is chunked,
embedded, and indexed synchronously.

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
await client.agent.knowledgeBases.createTextDocument("id", {
    name: "name",
    content: "content",
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

**request:** `Speechify.agent.CreateTextDocumentRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">createUrlDocument</a>(id, { ...params }) -> Speechify.KnowledgeBaseDocument</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a URL via Firecrawl and ingest the rendered content as a
document. The fetch happens synchronously; expect a few
seconds per page. Use the sitemap / crawl endpoints for
multi-page imports.

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
await client.agent.knowledgeBases.createUrlDocument("id", {
    url: "url",
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

**request:** `Speechify.agent.CreateUrlDocumentRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">createSitemapImport</a>(id, { ...params }) -> Speechify.ImportJobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Kick off an async sitemap import. Returns 202 with the import
job row; client polls `GET /{id}/imports` for progress.

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
await client.agent.knowledgeBases.createSitemapImport("id", {
    url: "url",
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

**request:** `Speechify.agent.CreateSitemapImportRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">createCrawlImport</a>(id, { ...params }) -> Speechify.ImportJobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Kick off an async website crawl. Returns 202 with the import
job row; client polls `GET /{id}/imports` for progress.

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
await client.agent.knowledgeBases.createCrawlImport("id", {
    url: "url",
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

**request:** `Speechify.agent.CreateCrawlImportRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">createUrlBatchImport</a>(id, { ...params }) -> Speechify.ImportJobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Kick off an async multi-URL import. Accepts 1..N URLs in a
single job (capped per-deployment, default 50) and runs the
same per-URL pipeline as the sitemap worker. Returns 202 with
the import job row; client polls `GET /{id}/imports` for
progress.

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
await client.agent.knowledgeBases.createUrlBatchImport("id", {
    urls: ["urls"],
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

**request:** `Speechify.agent.CreateUrlBatchImportRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">listImportJobs</a>(id, { ...params }) -> Speechify.ListImportJobsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List import jobs (sitemap / crawl / refresh) for a knowledge base.

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
await client.agent.knowledgeBases.listImportJobs("id");
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

**request:** `Speechify.agent.ListImportJobsKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">cancelImportJob</a>(id, importId, { ...params }) -> Speechify.ImportJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a non-terminal import job. Idempotent on terminal jobs
(completed / failed / cancelled) — the cancel call returns the
unchanged row.

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
await client.agent.knowledgeBases.cancelImportJob("id", "importId");
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

**importId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.CancelImportJobKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">batchDeleteDocuments</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete multiple documents in a single transaction. All ids
must belong to the supplied knowledge base; mismatches fail
the request with 400 before any rows are touched. Capped at
200 ids per call.

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
await client.agent.knowledgeBases.batchDeleteDocuments("id", {
    ids: ["ids"],
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

**request:** `Speechify.agent.BatchDeleteDocumentsRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">batchMoveDocuments</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Move multiple documents into a folder in a single transaction.
Pass `folder_id: null` to move every doc to root. Capped at
200 ids per call.

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
await client.agent.knowledgeBases.batchMoveDocuments("id", {
    ids: ["ids"],
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

**request:** `Speechify.agent.BatchMoveDocumentsRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">updateRefreshConfig</a>(id, docId, { ...params }) -> Speechify.RefreshConfig</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the per-document auto-refresh state. Only meaningful
for url-sourced documents; file and text rows reject the
request.

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
await client.agent.knowledgeBases.updateRefreshConfig("id", "docId");
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

**docId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.UpdateRefreshConfigRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">listRefreshHistory</a>(id, docId, { ...params }) -> Speechify.ListRefreshHistoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List recent auto-refresh attempts for a document.

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
await client.agent.knowledgeBases.listRefreshHistory("id", "docId");
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

**docId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.ListRefreshHistoryKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">listFolders</a>(id, { ...params }) -> core.Page&lt;Speechify.KnowledgeBaseFolder&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List folders inside a knowledge base. Root-level folders have
`parent_folder_id: null`. Cursor-paginated: omit `cursor` to
fetch the first page. Default page size is 50 and max is 200.
The console builds the folder tree from `parent_folder_id`, so
consumers should walk every page until `has_more` is `false`
before rendering the tree.

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
const response = await client.agent.knowledgeBases.listFolders("id");
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.knowledgeBases.listFolders("id");
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListFoldersKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">createFolder</a>(id, { ...params }) -> Speechify.KnowledgeBaseFolder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a folder inside a knowledge base.

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
await client.agent.knowledgeBases.createFolder("id", {
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

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.CreateFolderRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">deleteFolder</a>(id, folderId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a folder. Documents inside the folder are moved to root
(not deleted). Sub-folders are detached likewise.

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
await client.agent.knowledgeBases.deleteFolder("id", "folderId");
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

**folderId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.DeleteFolderKnowledgeBasesRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">updateFolder</a>(id, folderId, { ...params }) -> Speechify.KnowledgeBaseFolder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a folder. Pass `parent_folder_id: null` to move to
root; omit the field to leave it unchanged.

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
await client.agent.knowledgeBases.updateFolder("id", "folderId");
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

**folderId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.UpdateFolderRequest`

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

<details><summary><code>client.agent.knowledgeBases.<a href="/src/api/resources/agent/resources/knowledgeBases/client/Client.ts">search</a>({ ...params }) -> Speechify.SearchKnowledgeBasesResponse</code></summary>
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
await client.agent.knowledgeBases.search({
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

**request:** `Speechify.agent.SearchKnowledgeBasesRequest`

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

## Agent Memories

<details><summary><code>client.agent.memories.<a href="/src/api/resources/agent/resources/memories/client/Client.ts">delete</a>(memoryId, { ...params }) -> void</code></summary>
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
await client.agent.memories.delete("memoryId");
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

**request:** `Speechify.agent.DeleteMemoriesRequest`

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

## Agent Tests

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">getTest</a>(id, { ...params }) -> Speechify.AgentTest</code></summary>
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
await client.agent.tests.getTest("id");
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

**request:** `Speechify.agent.GetTestTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">deleteTest</a>(id, { ...params }) -> void</code></summary>
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
await client.agent.tests.deleteTest("id");
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

**request:** `Speechify.agent.DeleteTestTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">updateTest</a>(id, { ...params }) -> Speechify.AgentTest</code></summary>
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
await client.agent.tests.updateTest("id");
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

**request:** `Speechify.agent.UpdateAgentTestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">listTestRuns</a>(id, { ...params }) -> core.Page&lt;Speechify.AgentTestRun&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List one page of run history for a test, newest first.
Paginate by passing `cursor` from the previous response.

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
const response = await client.agent.tests.listTestRuns("id");
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.tests.listTestRuns("id");
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListTestRunsTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">runTest</a>(id, { ...params }) -> Speechify.AgentTestRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enqueue a single run of the test. The returned run starts in
`queued` status. Poll `GET /v1/agents/tests/runs/{id}` until the status
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
await client.agent.tests.runTest("id");
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

**request:** `Speechify.agent.RunTestTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">getTestRun</a>(id, { ...params }) -> Speechify.AgentTestRun</code></summary>
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
await client.agent.tests.getTestRun("id");
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

**request:** `Speechify.agent.GetTestRunTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">listSuiteRuns</a>({ ...params }) -> core.Page&lt;Speechify.AgentTestSuiteRun&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List one page of suite runs (test invocations), newest first.
A suite run groups every test run dispatched by one Run All,
batch, or resubmit call. Paginate by passing `cursor` from the
previous response.

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
const response = await client.agent.tests.listSuiteRuns();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.tests.listSuiteRuns();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListSuiteRunsTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">getSuiteRun</a>(id, { ...params }) -> Speechify.AgentTestSuiteRunWithRuns</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a suite run by ID with its child runs and the derived
aggregate status and pass/fail/error counts.

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
await client.agent.tests.getSuiteRun("id");
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

**id:** `string` — Suite run ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.GetSuiteRunTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">resubmitSuiteRun</a>(id, { ...params }) -> Speechify.RunAgentTestsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Re-run the failed and errored tests of a suite run as a fresh
suite run, linked back to the original via
`parent_suite_run_id`. Returns 400 when the suite run has no
failed or errored tests to re-run.

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
await client.agent.tests.resubmitSuiteRun("id");
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

**id:** `string` — Suite run ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.ResubmitSuiteRunTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">listAllTests</a>({ ...params }) -> core.Page&lt;Speechify.AgentTestWithLastRun&gt;</code></summary>
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
N+1 round-trips. Walk pages while `has_more` is true.

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
const response = await client.agent.tests.listAllTests();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.tests.listAllTests();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListAllTestsTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">getTestStats</a>({ ...params }) -> Speechify.TestStats</code></summary>
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
await client.agent.tests.getTestStats();
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

**request:** `Speechify.agent.GetTestStatsTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">runTestsBatch</a>({ ...params }) -> Speechify.RunBatchResponse</code></summary>
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
`GET /v1/agents/tests/runs/{id}` for each.

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
await client.agent.tests.runTestsBatch({
    entries: [
        {
            testId: "test_01ky612y9cb7dbaj638x46msxv",
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

**request:** `Speechify.agent.RunBatchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">listTestAttachments</a>(id, { ...params }) -> Speechify.ListAgentTestAttachmentsResponse</code></summary>
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
await client.agent.tests.listTestAttachments("id");
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

**request:** `Speechify.agent.ListTestAttachmentsTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">attachTest</a>(id, agentId, { ...params }) -> void</code></summary>
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
await client.agent.tests.attachTest("id", "agentId");
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

**request:** `Speechify.agent.AttachTestTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">detachTest</a>(id, agentId, { ...params }) -> void</code></summary>
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
await client.agent.tests.detachTest("id", "agentId");
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

**request:** `Speechify.agent.DetachTestTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">listTestFolders</a>() -> Speechify.ListAgentTestFoldersResponse</code></summary>
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
await client.agent.tests.listTestFolders();
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

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">createTestFolder</a>({ ...params }) -> Speechify.AgentTestFolder</code></summary>
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
await client.agent.tests.createTestFolder({
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

**request:** `Speechify.agent.CreateAgentTestFolderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">deleteTestFolder</a>(id, { ...params }) -> void</code></summary>
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
await client.agent.tests.deleteTestFolder("id");
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

**request:** `Speechify.agent.DeleteTestFolderTestsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.tests.<a href="/src/api/resources/agent/resources/tests/client/Client.ts">updateTestFolder</a>(id, { ...params }) -> Speechify.AgentTestFolder</code></summary>
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
await client.agent.tests.updateTestFolder("id");
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

**request:** `Speechify.agent.UpdateAgentTestFolderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tests.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agent PhoneNumbers

<details><summary><code>client.agent.phoneNumbers.<a href="/src/api/resources/agent/resources/phoneNumbers/client/Client.ts">list</a>() -> Speechify.ListPhoneNumbersResponse</code></summary>
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
await client.agent.phoneNumbers.list();
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

<details><summary><code>client.agent.phoneNumbers.<a href="/src/api/resources/agent/resources/phoneNumbers/client/Client.ts">import</a>({ ...params }) -> Speechify.PhoneNumber</code></summary>
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
await client.agent.phoneNumbers.import({
    e164: "+12025551234",
    source: "livekit",
    label: "Trial inbound",
    agentId: "agent_01HS...",
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

**request:** `Speechify.agent.ImportPhoneNumberRequest`

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

<details><summary><code>client.agent.phoneNumbers.<a href="/src/api/resources/agent/resources/phoneNumbers/client/Client.ts">searchAvailable</a>({ ...params }) -> Speechify.SearchAvailablePhoneNumbersResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search carrier inventory for phone numbers available to purchase.
Currently restricted to the US (`country=US`); pass `area_code`
to narrow to a specific NPA. The returned numbers are not held;
a subsequent `POST /v1/agents/phone-numbers/purchase` against the same
E.164 may fail with 4xx if the number has been taken in the
meantime.

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
await client.agent.phoneNumbers.searchAvailable();
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

**request:** `Speechify.agent.SearchAvailablePhoneNumbersRequest`

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

<details><summary><code>client.agent.phoneNumbers.<a href="/src/api/resources/agent/resources/phoneNumbers/client/Client.ts">purchase</a>({ ...params }) -> Speechify.PhoneNumber</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Purchase a phone number on Speechify's master Twilio account.
The number is billed to Speechify until released. A plan that
includes no purchased numbers (e.g. Free) returns 402; a plan
that has used its full included quota returns 422. This is
independent of the overall 100-number cap.
`e164` must come from a recent `SearchAvailablePhoneNumbers`
response — carriers reject buys against numbers that are no
longer in inventory. The returned phone number is wired for
both inbound (when `agent_id` is set, or after a later
`PATCH`) and outbound calls (via the workspace's shared
outbound trunk).

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
await client.agent.phoneNumbers.purchase({
    e164: "+14155552671",
    label: "Sales line",
    agentId: "agent_01HS...",
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

**request:** `Speechify.agent.PurchasePhoneNumberRequest`

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

<details><summary><code>client.agent.phoneNumbers.<a href="/src/api/resources/agent/resources/phoneNumbers/client/Client.ts">get</a>(id, { ...params }) -> Speechify.PhoneNumber</code></summary>
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
await client.agent.phoneNumbers.get("id");
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

**request:** `Speechify.agent.GetPhoneNumbersRequest`

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

<details><summary><code>client.agent.phoneNumbers.<a href="/src/api/resources/agent/resources/phoneNumbers/client/Client.ts">delete</a>(id, { ...params }) -> void</code></summary>
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
await client.agent.phoneNumbers.delete("id");
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

**request:** `Speechify.agent.DeletePhoneNumbersRequest`

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

<details><summary><code>client.agent.phoneNumbers.<a href="/src/api/resources/agent/resources/phoneNumbers/client/Client.ts">update</a>(id, { ...params }) -> Speechify.PhoneNumber</code></summary>
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
await client.agent.phoneNumbers.update("id", {
    label: "After-hours line",
    agentId: "agent_01HS4X9VBCDEF1234567890AB",
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

**request:** `Speechify.agent.UpdatePhoneNumberRequest`

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

## Agent SipTrunks

<details><summary><code>client.agent.sipTrunks.<a href="/src/api/resources/agent/resources/sipTrunks/client/Client.ts">list</a>() -> Speechify.ListSipTrunksResponse</code></summary>
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
await client.agent.sipTrunks.list();
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

<details><summary><code>client.agent.sipTrunks.<a href="/src/api/resources/agent/resources/sipTrunks/client/Client.ts">create</a>({ ...params }) -> Speechify.SipTrunk</code></summary>
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
await client.agent.sipTrunks.create({
    name: "Telnyx BYOC",
    kind: "byoc",
    direction: "both",
    sipAddress: "sip.telnyx.com",
    authUsername: "myuser",
    authPassword: "mypassword",
    transport: "auto",
    mediaEncryption: "allow",
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

**request:** `Speechify.agent.CreateSipTrunkRequest`

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

<details><summary><code>client.agent.sipTrunks.<a href="/src/api/resources/agent/resources/sipTrunks/client/Client.ts">get</a>(id, { ...params }) -> Speechify.SipTrunk</code></summary>
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
await client.agent.sipTrunks.get("id");
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

**request:** `Speechify.agent.GetSipTrunksRequest`

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

<details><summary><code>client.agent.sipTrunks.<a href="/src/api/resources/agent/resources/sipTrunks/client/Client.ts">delete</a>(id, { ...params }) -> void</code></summary>
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
await client.agent.sipTrunks.delete("id");
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

**request:** `Speechify.agent.DeleteSipTrunksRequest`

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

## Agent OutboundCalls

<details><summary><code>client.agent.outboundCalls.<a href="/src/api/resources/agent/resources/outboundCalls/client/Client.ts">create</a>({ ...params }) -> Speechify.CreateOutboundCallResponse</code></summary>
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
Poll `GET /v1/agents/conversations/{conversation_id}` for status
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
await client.agent.outboundCalls.create({
    agentId: "agent_01HS...",
    to: "+41791234567",
    callerIdNumber: "+12025551234",
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

**request:** `Speechify.agent.CreateOutboundCallRequest`

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

## Agent BatchCalls

<details><summary><code>client.agent.batchCalls.<a href="/src/api/resources/agent/resources/batchCalls/client/Client.ts">list</a>({ ...params }) -> core.Page&lt;Speechify.BatchCall&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns one page of batch calls for the workspace, newest first.
Paginate by passing `cursor` from the previous response.

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
const response = await client.agent.batchCalls.list();
for await (const item of response) {
    console.log(item);
}

// Or you can manually iterate page-by-page
const page = await client.agent.batchCalls.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}
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

**request:** `Speechify.agent.ListBatchCallsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchCalls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.batchCalls.<a href="/src/api/resources/agent/resources/batchCalls/client/Client.ts">create</a>({ ...params }) -> Speechify.CreateBatchCallResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Dial a list of phone numbers through one of your voice agents in a
single request. Each recipient can receive personalised dynamic
variables that your agent prompt references via `{{key}}` placeholders.
Batches can run immediately or be scheduled up to 30 days in advance.

Accepts `application/json` or `multipart/form-data` (with a CSV file).
Max 1000 recipients per batch.

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
await client.agent.batchCalls.create({
    name: "Appointment reminders",
    agentId: "agent_01HS...",
    recipients: [
        {
            phone: "+14155551234",
            dynamicVars: {
                first_name: "Alice",
                appointment_date: "May 5th at 2pm",
            },
        },
        {
            phone: "+14155555678",
            dynamicVars: {
                first_name: "Bob",
                appointment_date: "May 6th at 10am",
            },
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

**request:** `Speechify.agent.CreateBatchCallRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchCalls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.batchCalls.<a href="/src/api/resources/agent/resources/batchCalls/client/Client.ts">get</a>(id, { ...params }) -> Speechify.GetBatchCallResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the batch row plus all recipients so the detail view renders
without a second round-trip.

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
await client.agent.batchCalls.get("id");
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

**id:** `string` — Batch call ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.GetBatchCallsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchCalls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.batchCalls.<a href="/src/api/resources/agent/resources/batchCalls/client/Client.ts">cancel</a>(id, { ...params }) -> Speechify.CreateBatchCallResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancels a scheduled or pending batch before it starts dialing.
Returns 409 if the batch is already running or completed.

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
await client.agent.batchCalls.cancel("id");
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

**id:** `string` — Batch call ID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.CancelBatchCallsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BatchCalls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agent Flow

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">getFlow</a>(id, { ...params }) -> Speechify.GetFlowResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return the agent's flow graph: the current draft (if any), the
active published graph (if any), and the version history.

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
await client.agent.flow.getFlow("agent_01k7m6etzwf057j6w0zmdsgppr");
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

**id:** `string` — Prefixed agent id.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.GetFlowFlowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">updateFlow</a>(id, { ...params }) -> Speechify.FlowGraph</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replace the agent's draft flow graph. The graph is validated
before it is stored; publish it separately to make it active.

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
await client.agent.flow.updateFlow("agent_01k7m6etzwf057j6w0zmdsgppr", {
    nodes: [
        {
            key: "value",
        },
    ],
    edges: [
        {
            key: "value",
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

**id:** `string` — Prefixed agent id.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.PutFlowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">discardDraft</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Discard the agent's unpublished draft flow graph.

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
await client.agent.flow.discardDraft("agent_01k7m6etzwf057j6w0zmdsgppr");
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

**id:** `string` — Prefixed agent id.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.DiscardDraftFlowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">publish</a>(id, { ...params }) -> Speechify.FlowVersion</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publish the agent's draft graph as a new active flow version.

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
await client.agent.flow.publish("agent_01k7m6etzwf057j6w0zmdsgppr");
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

**id:** `string` — Prefixed agent id.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.PublishFlowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">rollback</a>(id, { ...params }) -> Speechify.FlowVersion</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publish a prior flow version as the active graph.

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
await client.agent.flow.rollback("agent_01k7m6etzwf057j6w0zmdsgppr", {
    versionId: "9c1e8a40-3b2d-4f6a-8e11-2a7d5c9f0b34",
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

**id:** `string` — Prefixed agent id.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.RollbackFlowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">deactivate</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deactivate the agent's published flow so the agent runs the synthesized default flow.

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
await client.agent.flow.deactivate("agent_01k7m6etzwf057j6w0zmdsgppr");
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

**id:** `string` — Prefixed agent id.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.DeactivateFlowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">listVersions</a>(id, { ...params }) -> Speechify.ListFlowVersionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List every published flow version for the agent, newest first.

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
await client.agent.flow.listVersions("agent_01k7m6etzwf057j6w0zmdsgppr");
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

**id:** `string` — Prefixed agent id.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.ListVersionsFlowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">getVersion</a>(id, versionId, { ...params }) -> Speechify.GetFlowVersionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return the full flow graph for a specific published version.

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
await client.agent.flow.getVersion("agent_01k7m6etzwf057j6w0zmdsgppr", "9c1e8a40-3b2d-4f6a-8e11-2a7d5c9f0b34");
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

**id:** `string` — Prefixed agent id.

</dd>
</dl>

<dl>
<dd>

**versionId:** `string` — Flow version UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.GetVersionFlowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">getSchema</a>() -> Record&lt;string, unknown&gt;</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Return the JSON Schema describing the flow graph node taxonomy.
Unauthenticated; flow editors fetch it to validate graphs client-side.

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
await client.agent.flow.getSchema();
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

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">listTemplates</a>() -> Speechify.ListFlowTemplatesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the reusable flow templates available to the workspace.

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
await client.agent.flow.listTemplates();
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

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">createTemplate</a>({ ...params }) -> Speechify.FlowTemplate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a reusable flow template from a graph.

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
await client.agent.flow.createTemplate({
    key: "key",
    name: "name",
    graph: {
        nodes: [
            {
                key: "value",
            },
        ],
        edges: [
            {
                key: "value",
            },
        ],
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

**request:** `Speechify.CreateFlowTemplateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">getTemplate</a>(id, { ...params }) -> Speechify.FlowTemplate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a flow template by id.

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
await client.agent.flow.getTemplate("3f7b1c20-9d4e-4a18-b6c2-8e0f1a2b3c4d");
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

**id:** `string` — Flow template UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.GetTemplateFlowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">deleteTemplate</a>(id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a flow template.

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
await client.agent.flow.deleteTemplate("3f7b1c20-9d4e-4a18-b6c2-8e0f1a2b3c4d");
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

**id:** `string` — Flow template UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.DeleteTemplateFlowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">updateTemplate</a>(id, { ...params }) -> Speechify.FlowTemplate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Replace a flow template. The whole template is replaced, not patched field-by-field.

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
await client.agent.flow.updateTemplate("3f7b1c20-9d4e-4a18-b6c2-8e0f1a2b3c4d", {
    body: {
        key: "key",
        name: "name",
        graph: {
            nodes: [
                {
                    key: "value",
                },
            ],
            edges: [
                {
                    key: "value",
                },
            ],
        },
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

**id:** `string` — Flow template UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.UpdateTemplateFlowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agent.flow.<a href="/src/api/resources/agent/resources/flow/client/Client.ts">cloneTemplate</a>(id, { ...params }) -> Speechify.FlowGraph</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Clone a flow template onto an agent as a new draft graph.

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
await client.agent.flow.cloneTemplate("3f7b1c20-9d4e-4a18-b6c2-8e0f1a2b3c4d", {
    agentId: "agent_01k7m6etzwf057j6w0zmdsgppr",
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

**id:** `string` — Flow template UUID.

</dd>
</dl>

<dl>
<dd>

**request:** `Speechify.agent.CloneFlowTemplateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Flow.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

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
    audioFormat: "mp3",
    input: "Hello! This is the Speechify text-to-speech API.",
    model: "simba-english",
    voiceId: "george",
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
