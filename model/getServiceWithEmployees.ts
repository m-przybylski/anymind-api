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
import { EmploymentWithExpertProfile } from './employmentWithExpertProfile';
import { ServiceWithOwnerProfile } from './serviceWithOwnerProfile';


export interface GetServiceWithEmployees {
    serviceDetails: ServiceWithOwnerProfile;
    employeesDetails: Array<EmploymentWithExpertProfile>;
}
