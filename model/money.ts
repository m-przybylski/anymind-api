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
import { CurrencyUnit } from './currencyUnit';


export interface Money {
    negative: boolean;
    zero: boolean;
    currencyUnit: CurrencyUnit;
    scale: number;
    amount: number;
    amountMajor: number;
    amountMajorLong: number;
    amountMajorInt: number;
    amountMinor: number;
    amountMinorLong: number;
    amountMinorInt: number;
    minorPart: number;
    positive: boolean;
    positiveOrZero: boolean;
    negativeOrZero: boolean;
}
