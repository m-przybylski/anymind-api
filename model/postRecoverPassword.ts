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


export interface PostRecoverPassword {
    msisdn: string;
    method?: PostRecoverPassword.MethodEnum;
}
export namespace PostRecoverPassword {
    export type MethodEnum = 'EMAIL' | 'SMS';
    export const MethodEnum = {
        EMAIL: 'EMAIL' as MethodEnum,
        SMS: 'SMS' as MethodEnum
    }
}
