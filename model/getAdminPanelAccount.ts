/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.33
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface GetAdminPanelAccount {
    id: string;
    email: string;
    role: GetAdminPanelAccount.RoleEnum;
    registeredAt: Date;
}
export namespace GetAdminPanelAccount {
    export type RoleEnum = 'ADMIN' | 'ACCOUNTANT' | 'USER';
    export const RoleEnum = {
        ADMIN: 'ADMIN' as RoleEnum,
        ACCOUNTANT: 'ACCOUNTANT' as RoleEnum,
        USER: 'USER' as RoleEnum
    }
}
