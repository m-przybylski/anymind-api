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
import { Address } from './address';


export interface GetPersonalInvoiceDetails {
    id: string;
    accountId: string;
    legalStatus: string;
    personalIdentityNumber: string;
    address: Address;
    fullName: string;
    revenueAgency: string;
    createdAt: Date;
}
