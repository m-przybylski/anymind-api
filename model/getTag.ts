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


export interface GetTag {
    id: string;
    name: string;
    status: GetTag.StatusEnum;
}
export namespace GetTag {
    export type StatusEnum = 'NEW' | 'ACCEPTED' | 'REJECTED';
    export const StatusEnum = {
        NEW: 'NEW' as StatusEnum,
        ACCEPTED: 'ACCEPTED' as StatusEnum,
        REJECTED: 'REJECTED' as StatusEnum
    }
}
