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
import { GetAccountDetails } from './getAccountDetails';
import { GetAnswer } from './getAnswer';
import { GetReport } from './getReport';


export interface GetComment {
    commentId: string;
    content: string;
    expertId: string;
    sueId: string;
    answer?: GetAnswer;
    report?: GetReport;
    callDurationInSeconds: number;
    clientDetails: GetAccountDetails;
    createdAt: Date;
}
