/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.54
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ServiceWithOwnerProfile } from './serviceWithOwnerProfile';


export interface EmploymentWithService {
    id: string;
    serviceDetails: ServiceWithOwnerProfile;
    vatRateType: EmploymentWithService.VatRateTypeEnum;
    employeeId: string;
    usageCounter: number;
    commentCounter: number;
    ratingCounter: number;
    rating?: number;
    createdAt: Date;
}
export namespace EmploymentWithService {
    export type VatRateTypeEnum = 'NATURAL_PERSON' | 'COMPANY_0' | 'COMPANY_23';
    export const VatRateTypeEnum = {
        NATURALPERSON: 'NATURAL_PERSON' as VatRateTypeEnum,
        COMPANY0: 'COMPANY_0' as VatRateTypeEnum,
        COMPANY23: 'COMPANY_23' as VatRateTypeEnum
    }
}
