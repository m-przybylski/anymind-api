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
import { GetAccountDetails } from './getAccountDetails';


export interface Account {
    id: string;
    msisdn: string;
    email?: string;
    unverifiedEmail?: string;
    registeredAt: Date;
    deletedAt?: Date;
    isBlocked: boolean;
    hasPassword: boolean;
    isClientCompany: boolean;
    isAnonymous: boolean;
    details: GetAccountDetails;
    currency: string;
    countryISO: string;
}
