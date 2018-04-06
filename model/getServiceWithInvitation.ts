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
import { GetInvitation } from './getInvitation';
import { MoneyDto } from './moneyDto';


export interface GetServiceWithInvitation {
    id: string;
    ownerId: string;
    name: string;
    description: string;
    price: MoneyDto;
    isSuspended: boolean;
    isFreelance: boolean;
    language: string;
    createdAt: Date;
    invitation: GetInvitation;
}
