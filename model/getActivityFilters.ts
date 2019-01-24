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
import { ExpertFilter } from './expertFilter';
import { ServiceFilter } from './serviceFilter';


export interface GetActivityFilters {
    activityTypes: Array<string>;
    experts: Array<ExpertFilter>;
    services: Array<ServiceFilter>;
}
