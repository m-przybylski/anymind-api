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


export interface PostAdminPanelAccount {
    email: string;
    password: string;
    role: PostAdminPanelAccount.RoleEnum;
}
export namespace PostAdminPanelAccount {
    export type RoleEnum = 'ADMIN' | 'ACCOUNTANT' | 'USER';
    export const RoleEnum = {
        ADMIN: 'ADMIN' as RoleEnum,
        ACCOUNTANT: 'ACCOUNTANT' as RoleEnum,
        USER: 'USER' as RoleEnum
    }
}
