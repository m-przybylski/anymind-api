/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.30
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GetFavouriteProfile } from './getFavouriteProfile';
import { GetLastConsultation } from './getLastConsultation';


export interface GetDashboardClientExperts {
    lastConsultations: Array<GetLastConsultation>;
    favouriteProfiles: Array<GetFavouriteProfile>;
}
