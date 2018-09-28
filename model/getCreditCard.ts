/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface GetCreditCard {
    isDefault: boolean;
    maskedNumber: string;
    id: string;
    expiryDate: string;
    cardType: GetCreditCard.CardTypeEnum;
    createdAt: Date;
}
export namespace GetCreditCard {
    export type CardTypeEnum = 'AMEX' | 'DINERS' | 'MASTERCARD' | 'VISA' | 'OTHER';
    export const CardTypeEnum = {
        AMEX: 'AMEX' as CardTypeEnum,
        DINERS: 'DINERS' as CardTypeEnum,
        MASTERCARD: 'MASTERCARD' as CardTypeEnum,
        VISA: 'VISA' as CardTypeEnum,
        OTHER: 'OTHER' as CardTypeEnum
    }
}
