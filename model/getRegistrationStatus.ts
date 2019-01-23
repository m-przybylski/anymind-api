/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.53
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface GetRegistrationStatus {
    status: GetRegistrationStatus.StatusEnum;
}
export namespace GetRegistrationStatus {
    export type StatusEnum = 'UNREGISTERED' | 'VERIFICATION_ATTEMPTS_EXCEEDED' | 'NO_PASSWORD' | 'REGISTERED' | 'BLOCKED';
    export const StatusEnum = {
        UNREGISTERED: 'UNREGISTERED' as StatusEnum,
        VERIFICATIONATTEMPTSEXCEEDED: 'VERIFICATION_ATTEMPTS_EXCEEDED' as StatusEnum,
        NOPASSWORD: 'NO_PASSWORD' as StatusEnum,
        REGISTERED: 'REGISTERED' as StatusEnum,
        BLOCKED: 'BLOCKED' as StatusEnum
    }
}
