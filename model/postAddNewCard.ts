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


export interface PostAddNewCard {
    name: string;
    email: string;
    encryptedCard: string;
    expiryDate: string;
    language?: PostAddNewCard.LanguageEnum;
}
export namespace PostAddNewCard {
    export type LanguageEnum = 'pl' | 'en';
    export const LanguageEnum = {
        Pl: 'pl' as LanguageEnum,
        En: 'en' as LanguageEnum
    }
}
