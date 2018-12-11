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
import { GetInvoiceDetails } from './getInvoiceDetails';
import { GetPayoutAmount } from './getPayoutAmount';
import { GetPayoutMethod } from './getPayoutMethod';
import { GetProfile } from './getProfile';


export interface GetProfileWithPayoutDetails {
    profile: GetProfile;
    msisdn: string;
    email?: string;
    invoiceDetails?: GetInvoiceDetails;
    payoutMethod?: GetPayoutMethod;
    expPayoutAmount: GetPayoutAmount;
    orgPayoutAmount: GetPayoutAmount;
}
