/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ProfileDocument } from './profileDocument';


export interface ExpertProfileWithDocuments {
    id: string;
    name: string;
    avatar: string;
    description: string;
    documents: Array<ProfileDocument>;
}
