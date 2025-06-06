/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Speechify from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CreateAccessTokenRequestScope: core.serialization.Schema<
    serializers.tts.CreateAccessTokenRequestScope.Raw,
    Speechify.tts.CreateAccessTokenRequestScope
> = core.serialization.enum_([
    "audio:speech",
    "audio:stream",
    "audio:all",
    "voices:read",
    "voices:create",
    "voices:delete",
    "voices:all",
]);

export declare namespace CreateAccessTokenRequestScope {
    export type Raw =
        | "audio:speech"
        | "audio:stream"
        | "audio:all"
        | "voices:read"
        | "voices:create"
        | "voices:delete"
        | "voices:all";
}
