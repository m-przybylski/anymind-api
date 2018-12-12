/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface GetReport {
    cause: GetReport.CauseEnum;
    status: GetReport.StatusEnum;
}
export namespace GetReport {
    export type CauseEnum = 'FALSE_COMMENT' | 'OFFENSIVE_COMMENT' | 'SPAM_COMMENT';
    export const CauseEnum = {
        FALSECOMMENT: 'FALSE_COMMENT' as CauseEnum,
        OFFENSIVECOMMENT: 'OFFENSIVE_COMMENT' as CauseEnum,
        SPAMCOMMENT: 'SPAM_COMMENT' as CauseEnum
    }
    export type StatusEnum = 'NEW' | 'ACCEPTED' | 'REJECTED';
    export const StatusEnum = {
        NEW: 'NEW' as StatusEnum,
        ACCEPTED: 'ACCEPTED' as StatusEnum,
        REJECTED: 'REJECTED' as StatusEnum
    }
}
