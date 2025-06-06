/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Model used for audio synthesis
 * simba-base ModelBase  ModelBase is deprecated. Use simba-english or simba-multilingual instead.  @deprecated
 * simba-english ModelEnglish
 * simba-multilingual ModelMultilingual
 * simba-turbo ModelTurbo
 */
export type ExperimentalStreamRequestModel = "simba-base" | "simba-english" | "simba-multilingual" | "simba-turbo";
export const ExperimentalStreamRequestModel = {
    SimbaBase: "simba-base",
    SimbaEnglish: "simba-english",
    SimbaMultilingual: "simba-multilingual",
    SimbaTurbo: "simba-turbo",
} as const;
