/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.21
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface GetFileInfo {
    id: string;
    token: string;
    accountId: string;
    name?: string;
    size?: number;
    isUploaded: boolean;
    status: GetFileInfo.StatusEnum;
    fileType: GetFileInfo.FileTypeEnum;
    downloadUrl?: string;
    previews: Array<string>;
    contentType: string;
    createdAt: Date;
}
export namespace GetFileInfo {
    export type StatusEnum = 'NEW' | 'ACCEPTED' | 'REJECTED';
    export const StatusEnum = {
        NEW: 'NEW' as StatusEnum,
        ACCEPTED: 'ACCEPTED' as StatusEnum,
        REJECTED: 'REJECTED' as StatusEnum
    }
    export type FileTypeEnum = 'PROFILE' | 'CHAT';
    export const FileTypeEnum = {
        PROFILE: 'PROFILE' as FileTypeEnum,
        CHAT: 'CHAT' as FileTypeEnum
    }
}
