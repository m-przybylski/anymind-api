/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.12
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface GetExpertVisibility {
    visibility: GetExpertVisibility.VisibilityEnum;
}
export namespace GetExpertVisibility {
    export type VisibilityEnum = 'visible' | 'invisible';
    export const VisibilityEnum = {
        Visible: 'visible' as VisibilityEnum,
        Invisible: 'invisible' as VisibilityEnum
    }
}
