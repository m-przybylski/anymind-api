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
import { GetAnswer } from './getAnswer';
import { GetClientDetails } from './getClientDetails';
import { GetProfileDetails } from './getProfileDetails';


export interface GetComment {
    commentId: string;
    content: string;
    clientId: string;
    expertId: string;
    expertDetails: GetProfileDetails;
    answer?: GetAnswer;
    callDurationInSeconds: number;
    isRecommended: boolean;
    clientDetails?: GetClientDetails;
    createdAt: Date;
}
