/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Speechify from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";
import * as stream from "stream";

export declare namespace Audio {
    export interface Options {
        environment?: core.Supplier<environments.SpeechifyEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Audio {
    constructor(protected readonly _options: Audio.Options = {}) {}

    /**
     * Gets the speech data for the given input
     *
     * @param {Speechify.tts.GetSpeechRequest} request
     * @param {Audio.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Speechify.tts.BadRequestError}
     * @throws {@link Speechify.tts.PaymentRequiredError}
     * @throws {@link Speechify.tts.ForbiddenError}
     * @throws {@link Speechify.tts.InternalServerError}
     *
     * @example
     *     await client.tts.audio.speech({
     *         input: "input",
     *         voiceId: "voice_id"
     *     })
     */
    public async speech(
        request: Speechify.tts.GetSpeechRequest,
        requestOptions?: Audio.RequestOptions,
    ): Promise<Speechify.tts.GetSpeechResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SpeechifyEnvironment.Default,
                "v1/audio/speech",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@speechify/api",
                "X-Fern-SDK-Version": "1.0.0",
                "User-Agent": "@speechify/api/1.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.tts.GetSpeechRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.tts.GetSpeechResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Speechify.tts.BadRequestError(_response.error.body);
                case 402:
                    throw new Speechify.tts.PaymentRequiredError(_response.error.body);
                case 403:
                    throw new Speechify.tts.ForbiddenError(_response.error.body);
                case 500:
                    throw new Speechify.tts.InternalServerError(_response.error.body);
                default:
                    throw new errors.SpeechifyError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SpeechifyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SpeechifyTimeoutError("Timeout exceeded when calling POST /v1/audio/speech.");
            case "unknown":
                throw new errors.SpeechifyError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets the stream speech for the given input
     * @throws {@link Speechify.tts.BadRequestError}
     * @throws {@link Speechify.tts.PaymentRequiredError}
     * @throws {@link Speechify.tts.ForbiddenError}
     * @throws {@link Speechify.tts.InternalServerError}
     */
    public async stream(
        request: Speechify.tts.GetStreamRequest,
        requestOptions?: Audio.RequestOptions,
    ): Promise<stream.Readable> {
        const { accept, ..._body } = request;
        const _response = await core.fetcher<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.SpeechifyEnvironment.Default,
                "v1/audio/stream",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@speechify/api",
                "X-Fern-SDK-Version": "1.0.0",
                "User-Agent": "@speechify/api/1.0.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                Accept: serializers.tts.AudioStreamRequestAccept.jsonOrThrow(accept, {
                    unrecognizedObjectKeys: "strip",
                }),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.tts.GetStreamRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            responseType: "streaming",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Speechify.tts.BadRequestError(_response.error.body);
                case 402:
                    throw new Speechify.tts.PaymentRequiredError(_response.error.body);
                case 403:
                    throw new Speechify.tts.ForbiddenError(_response.error.body);
                case 500:
                    throw new Speechify.tts.InternalServerError(_response.error.body);
                default:
                    throw new errors.SpeechifyError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.SpeechifyError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.SpeechifyTimeoutError("Timeout exceeded when calling POST /v1/audio/stream.");
            case "unknown":
                throw new errors.SpeechifyError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        const bearer = (await core.Supplier.get(this._options.token)) ?? process?.env["SPEECHIFY_API_KEY"];
        if (bearer == null) {
            throw new errors.SpeechifyError({
                message:
                    "Please specify a bearer by either passing it in to the constructor or initializing a SPEECHIFY_API_KEY environment variable",
            });
        }

        return `Bearer ${bearer}`;
    }
}
