/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.32
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GetCompanyInvoiceDetails } from './getCompanyInvoiceDetails';
import { GetPayoutMethod } from './getPayoutMethod';
import { MoneyDto } from './moneyDto';


export interface GetPayoutDetails {
    payoutId: string;
    requestedAmount: MoneyDto;
    tax: string;
    payoutAmount: MoneyDto;
    payoutMethod: GetPayoutMethod;
    companyInvoiceDetails: GetCompanyInvoiceDetails;
    createdAt: Date;
}
