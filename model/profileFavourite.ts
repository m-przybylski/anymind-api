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


export interface ProfileFavourite {
    accountId: string;
    profileId: string;
    profileType: ProfileFavourite.ProfileTypeEnum;
    createdAt: Date;
}
export namespace ProfileFavourite {
    export type ProfileTypeEnum = 'EXP' | 'ORG';
    export const ProfileTypeEnum = {
        EXP: 'EXP' as ProfileTypeEnum,
        ORG: 'ORG' as ProfileTypeEnum
    }
}
