/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.12
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';


export interface PostCompanyDetails {
    companyName: string;
    vatNumber: string;
    address: Address;
    vatRateType: PostCompanyDetails.VatRateTypeEnum;
}
export namespace PostCompanyDetails {
    export type VatRateTypeEnum = 'COMPANY_0' | 'COMPANY_23';
    export const VatRateTypeEnum = {
        _0: 'COMPANY_0' as VatRateTypeEnum,
        _23: 'COMPANY_23' as VatRateTypeEnum
    }
}
