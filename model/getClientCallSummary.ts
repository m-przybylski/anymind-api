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
import { MoneyDto } from './moneyDto';
import { Tag } from './tag';


export interface GetClientCallSummary {
    serviceUsageEventId: string;
    expertId: string;
    expertName: string;
    expertAvatar: string;
    callCost: MoneyDto;
    serviceName: string;
    serviceTags: Array<Tag>;
    callDuration: number;
    isRecommendable: boolean;
}