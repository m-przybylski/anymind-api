/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.21
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { MoneyDto } from './moneyDto';
import { ServiceUsageDetails } from './serviceUsageDetails';


export interface GetClientActivity {
    id: string;
    accountId: string;
    activityType: GetClientActivity.ActivityTypeEnum;
    serviceId?: string;
    expertId?: string;
    serviceName?: string;
    serviceOwnerId?: string;
    serviceUsageDetails?: ServiceUsageDetails;
    amount?: MoneyDto;
    promoCodeAmount?: MoneyDto;
    initializedAt: Date;
}
export namespace GetClientActivity {
    export type ActivityTypeEnum = 'SERVICE_USAGE_EVENT' | 'PAYOUT' | 'REFUND';
    export const ActivityTypeEnum = {
        SERVICEUSAGEEVENT: 'SERVICE_USAGE_EVENT' as ActivityTypeEnum,
        PAYOUT: 'PAYOUT' as ActivityTypeEnum,
        REFUND: 'REFUND' as ActivityTypeEnum
    }
}
