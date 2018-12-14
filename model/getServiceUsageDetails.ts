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
import { MoneyDto } from './moneyDto';


export interface GetServiceUsageDetails {
    serviceUsageEventId: string;
    ratelCallId: string;
    ratelRoomId?: string;
    answeredAt: Date;
    ratePerMinute: MoneyDto;
    amount?: MoneyDto;
    callDuration: number;
}
