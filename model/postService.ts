/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.40
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { MoneyDto } from './moneyDto';
import { PostServiceInvitation } from './postServiceInvitation';
import { PostServiceTag } from './postServiceTag';


export interface PostService {
    invitations: Array<PostServiceInvitation>;
    isOwnerEmployee: boolean;
    isFreelance: boolean;
    name: string;
    description: string;
    price: MoneyDto;
    tags: Array<PostServiceTag>;
    language: string;
}
