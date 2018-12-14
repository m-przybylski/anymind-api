/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.12
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface PostTechnicalProblem {
    problemType: PostTechnicalProblem.ProblemTypeEnum;
    description?: string;
}
export namespace PostTechnicalProblem {
    export type ProblemTypeEnum = 'CONNECTION_INTERRUPTED' | 'CHAT_PROBLEM' | 'IMAGE_OR_SOUND_PROBLEM' | 'AUTO_DISCONNECT' | 'OTHER';
    export const ProblemTypeEnum = {
        CONNECTIONINTERRUPTED: 'CONNECTION_INTERRUPTED' as ProblemTypeEnum,
        CHATPROBLEM: 'CHAT_PROBLEM' as ProblemTypeEnum,
        IMAGEORSOUNDPROBLEM: 'IMAGE_OR_SOUND_PROBLEM' as ProblemTypeEnum,
        AUTODISCONNECT: 'AUTO_DISCONNECT' as ProblemTypeEnum,
        OTHER: 'OTHER' as ProblemTypeEnum
    }
}
