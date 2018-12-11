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
import { Address } from './address';


export interface GetInvoiceDetails {
    id: string;
    accountId: string;
    invoiceDetailsType: GetInvoiceDetails.InvoiceDetailsTypeEnum;
    firstName?: string;
    lastName?: string;
    companyName?: string;
    vatNumber?: string;
    address: Address;
    createdAt: Date;
}
export namespace GetInvoiceDetails {
    export type InvoiceDetailsTypeEnum = 'COMPANY' | 'NATURAL_PERSON';
    export const InvoiceDetailsTypeEnum = {
        COMPANY: 'COMPANY' as InvoiceDetailsTypeEnum,
        NATURALPERSON: 'NATURAL_PERSON' as InvoiceDetailsTypeEnum
    }
}
