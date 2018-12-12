/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.6
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CropDetails } from './cropDetails';


export interface PostFileDetails {
    croppingDetails?: CropDetails;
    fileType: PostFileDetails.FileTypeEnum;
}
export namespace PostFileDetails {
    export type FileTypeEnum = 'PROFILE' | 'CHAT';
    export const FileTypeEnum = {
        PROFILE: 'PROFILE' as FileTypeEnum,
        CHAT: 'CHAT' as FileTypeEnum
    }
}
