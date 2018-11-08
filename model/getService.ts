/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.32
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { MoneyDto } from './moneyDto';


export interface GetService {
    id: string;
    ownerId: string;
    name: string;
    description: string;
    price: MoneyDto;
    language: string;
    isSuspended: boolean;
    isFreelance: boolean;
    createdAt: Date;
    deletedAt?: Date;
}
