/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Speechify from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const GetSpeechRequestModel: core.serialization.Schema<
    serializers.tts.GetSpeechRequestModel.Raw,
    Speechify.tts.GetSpeechRequestModel
> = core.serialization.enum_(["simba-base", "simba-english", "simba-multilingual", "simba-turbo"]);

export declare namespace GetSpeechRequestModel {
    export type Raw = "simba-base" | "simba-english" | "simba-multilingual" | "simba-turbo";
}
