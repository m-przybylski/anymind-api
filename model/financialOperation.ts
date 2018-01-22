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


export interface FinancialOperation {
    id: string;
    accountId: string;
    balanceAfter: MoneyDto;
    operation: MoneyDto;
    accountType: FinancialOperation.AccountTypeEnum;
    type: FinancialOperation.TypeEnum;
    createdAt: Date;
    persisted: boolean;
}
export namespace FinancialOperation {
    export type AccountTypeEnum = 'CLIENT' | 'PROFILE';
    export const AccountTypeEnum = {
        CLIENT: 'CLIENT' as AccountTypeEnum,
        PROFILE: 'PROFILE' as AccountTypeEnum
    }
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
