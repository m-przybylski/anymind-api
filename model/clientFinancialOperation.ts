/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.30
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { MoneyDto } from './moneyDto';


export interface ClientFinancialOperation {
    id: string;
    accountId: string;
    balanceAfter: MoneyDto;
    operation: MoneyDto;
    type: ClientFinancialOperation.TypeEnum;
    createdAt: Date;
}
export namespace ClientFinancialOperation {
    export type TypeEnum = 'SERVICE_USAGE_CLIENT' | 'PAYMENT' | 'REFUND_CLIENT' | 'SERVICE_USAGE_EXPERT' | 'PAYOUT' | 'REFUND_EXPERT';
    export const TypeEnum = {
        SERVICEUSAGECLIENT: 'SERVICE_USAGE_CLIENT' as TypeEnum,
        PAYMENT: 'PAYMENT' as TypeEnum,
        REFUNDCLIENT: 'REFUND_CLIENT' as TypeEnum,
        SERVICEUSAGEEXPERT: 'SERVICE_USAGE_EXPERT' as TypeEnum,
        PAYOUT: 'PAYOUT' as TypeEnum,
        REFUNDEXPERT: 'REFUND_EXPERT' as TypeEnum
    }
}
