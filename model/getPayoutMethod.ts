/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.17
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BankAccountDto } from './bankAccountDto';
import { PayPalAccountDto } from './payPalAccountDto';


export interface GetPayoutMethod {
    payPalAccount?: PayPalAccountDto;
    bankAccount?: BankAccountDto;
}
