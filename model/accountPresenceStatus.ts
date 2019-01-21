/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.47
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface AccountPresenceStatus {
    expertId: string;
    status: AccountPresenceStatus.StatusEnum;
    updatedAt: Date;
}
export namespace AccountPresenceStatus {
    export type StatusEnum = 'available' | 'unavailable' | 'busy';
    export const StatusEnum = {
        Available: 'available' as StatusEnum,
        Unavailable: 'unavailable' as StatusEnum,
        Busy: 'busy' as StatusEnum
    }
}
