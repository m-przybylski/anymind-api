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
import { GetService } from './getService';
import { OrganizationProfileWithDocuments } from './organizationProfileWithDocuments';


export interface SimpleOrganizationProfileView {
    organizationProfile: OrganizationProfileWithDocuments;
    services: Array<GetService>;
    isFavourite: boolean;
}