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


export interface PostProfileDetails {
    profileType: PostProfileDetails.ProfileTypeEnum;
    name: string;
    avatar: string;
    description: string;
    files: Array<string>;
    links: Array<string>;
}
export namespace PostProfileDetails {
    export type ProfileTypeEnum = 'EXP' | 'ORG';
    export const ProfileTypeEnum = {
        EXP: 'EXP' as ProfileTypeEnum,
        ORG: 'ORG' as ProfileTypeEnum
    }
}
