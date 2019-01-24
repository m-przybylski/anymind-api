/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.54
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { MoneyDto } from './moneyDto';
import { PostServiceTag } from './postServiceTag';


export interface PutService {
    isOwnerEmployee: boolean;
    name: string;
    description: string;
    price: MoneyDto;
    tags: Array<PostServiceTag>;
    language: string;
}
