/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.53
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GetProfile } from './getProfile';
import { GetService } from './getService';


export interface GetLastConsultation {
    createdAt?: Date;
    profile: GetProfile;
    service: GetService;
}
