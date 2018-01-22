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
import { GetProfile } from './getProfile';
import { GetService } from './getService';
import { Tag } from './tag';


export interface GetServiceUsageRequest {
    profile: GetProfile;
    service: GetService;
    tags: Array<Tag>;
    expert: GetProfile;
    freeSeconds: number;
}
