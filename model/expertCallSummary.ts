/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.6
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GetAccountDetails } from './getAccountDetails';
import { GetService } from './getService';
import { MoneyDto } from './moneyDto';


export interface ExpertCallSummary {
    sueId: string;
    service: GetService;
    profit: MoneyDto;
    callDuration: number;
    clientDetails: GetAccountDetails;
}
