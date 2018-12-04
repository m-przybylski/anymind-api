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
import { PartialExpertDetails } from './partialExpertDetails';
import { PartialOrganizationDetails } from './partialOrganizationDetails';
import { PostService } from './postService';


export interface PutWizardProfile {
    isExpert: boolean;
    isCompany: boolean;
    isSummary: boolean;
    organizationDetailsOption?: PartialOrganizationDetails;
    expertDetailsOption?: PartialExpertDetails;
    services: Array<PostService>;
}
