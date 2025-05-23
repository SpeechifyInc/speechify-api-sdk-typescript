/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Model used for audio synthesis. `simba-base` and `simba-turbo` are deprecated. Use `simba-english` or `simba-multilingual` instead.
 */
export type GetSpeechRequestModel =
    /**
     * simba-base is deprecated. Use simba-english or simba-multilingual instead. */
    | "simba-base"
    /**
     * simba-english is optimized for English words. */
    | "simba-english"
    /**
     * simba-multilingual is optimized for non-English words or mixed languages. */
    | "simba-multilingual"
    /**
     * simba-turbo is deprecated. Use simba-multilingual instead. */
    | "simba-turbo";
export const GetSpeechRequestModel = {
    SimbaBase: "simba-base",
    SimbaEnglish: "simba-english",
    SimbaMultilingual: "simba-multilingual",
    SimbaTurbo: "simba-turbo",
} as const;
