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
import { GetPayoutMethodDto } from './getPayoutMethodDto';
import { ServiceUsageDetails } from './serviceUsageDetails';
import { SimpleProfileFinancialOperation } from './simpleProfileFinancialOperation';


export interface GetProfileActivity {
    accountId: string;
    payoutId?: string;
    activityType: GetProfileActivity.ActivityTypeEnum;
    serviceId?: string;
    expertId?: string;
    serviceName?: string;
    serviceOwnerId?: string;
    isFreelanceService?: boolean;
    serviceUsageDetails?: ServiceUsageDetails;
    financialOperation?: SimpleProfileFinancialOperation;
    payoutMethod?: GetPayoutMethodDto;
    initializedAt: Date;
}
export namespace GetProfileActivity {
    export type ActivityTypeEnum = 'SERVICE_USAGE_EVENT' | 'FINANCIAL_TRANSACTION' | 'REFUND';
    export const ActivityTypeEnum = {
        SERVICEUSAGEEVENT: 'SERVICE_USAGE_EVENT' as ActivityTypeEnum,
        FINANCIALTRANSACTION: 'FINANCIAL_TRANSACTION' as ActivityTypeEnum,
        REFUND: 'REFUND' as ActivityTypeEnum
    }
}
