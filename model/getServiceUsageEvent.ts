/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.40
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { MoneyDto } from './moneyDto';


export interface GetServiceUsageEvent {
    id: string;
    ratelCallId: string;
    ratelRoomId?: string;
    clientId: string;
    expertId: string;
    serviceId: string;
    isRejected: boolean;
    createdAt: Date;
    startedAt?: Date;
    answeredAt?: Date;
    stoppedAt?: Date;
    wentOfflineAt?: Date;
    offlineDuration?: number;
    ratePerMinute: MoneyDto;
    freeSeconds: number;
}
