/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface GetInvitation {
    id: string;
    serviceId: string;
    serviceName: string;
    serviceOwnerId: string;
    email?: string;
    msisdn?: string;
    employeeId?: string;
    status: GetInvitation.StatusEnum;
    displayedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export namespace GetInvitation {
    export type StatusEnum = 'NEW' | 'ACCEPTED' | 'REJECTED' | 'DELETED';
    export const StatusEnum = {
        NEW: 'NEW' as StatusEnum,
        ACCEPTED: 'ACCEPTED' as StatusEnum,
        REJECTED: 'REJECTED' as StatusEnum,
        DELETED: 'DELETED' as StatusEnum
    }
}
