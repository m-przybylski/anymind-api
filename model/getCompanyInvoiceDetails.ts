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
import { Address } from './address';


export interface GetCompanyInvoiceDetails {
    id: string;
    accountId: string;
    vatNumber: string;
    companyName: string;
    vat: number;
    address: Address;
    email: string;
    createdAt: Date;
}
