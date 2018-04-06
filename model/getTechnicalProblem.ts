/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface GetTechnicalProblem {
    id: string;
    problemType: GetTechnicalProblem.ProblemTypeEnum;
    description?: string;
    sueId: string;
    accountId: string;
}
export namespace GetTechnicalProblem {
    export type ProblemTypeEnum = 'EXPERT_COULD_NOT_HEAR_CLIENT' | 'CLIENT_COULD_NOT_HEAR_EXPERT' | 'NOISE' | 'OTHER' | 'AUTO_DISCONNECT';
    export const ProblemTypeEnum = {
        EXPERTCOULDNOTHEARCLIENT: 'EXPERT_COULD_NOT_HEAR_CLIENT' as ProblemTypeEnum,
        CLIENTCOULDNOTHEAREXPERT: 'CLIENT_COULD_NOT_HEAR_EXPERT' as ProblemTypeEnum,
        NOISE: 'NOISE' as ProblemTypeEnum,
        OTHER: 'OTHER' as ProblemTypeEnum,
        AUTODISCONNECT: 'AUTO_DISCONNECT' as ProblemTypeEnum
    }
}
