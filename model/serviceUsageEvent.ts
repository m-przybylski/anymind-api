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


export interface ServiceUsageEvent {
    id: string;
    ratelCallId: string;
    ratelRoomId?: string;
    sueTransactionRequestId?: string;
    clientId: string;
    clientFinancialOperationId?: string;
    expertId: string;
    expertFinancialOperationId?: string;
    channelPartnerId?: string;
    referralPartnerId?: string;
    clientInvoiceId?: string;
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
    callStarted: boolean;
    callExpired: boolean;
    callFree: boolean;
    callSignificant: boolean;
    persisted: boolean;
    callFinalized: boolean;
}
