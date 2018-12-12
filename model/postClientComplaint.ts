/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface PostClientComplaint {
    message: string;
    complaintType: PostClientComplaint.ComplaintTypeEnum;
}
export namespace PostClientComplaint {
    export type ComplaintTypeEnum = 'INCOMPETENT_EXPERT' | 'IMPOLITE_EXPERT' | 'TECHNICAL_ISSUES' | 'OTHER';
    export const ComplaintTypeEnum = {
        INCOMPETENTEXPERT: 'INCOMPETENT_EXPERT' as ComplaintTypeEnum,
        IMPOLITEEXPERT: 'IMPOLITE_EXPERT' as ComplaintTypeEnum,
        TECHNICALISSUES: 'TECHNICAL_ISSUES' as ComplaintTypeEnum,
        OTHER: 'OTHER' as ComplaintTypeEnum
    }
}
