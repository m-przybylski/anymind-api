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


export interface GetClientComplaint {
    id: string;
    expertId: string;
    clientId: string;
    sueId: string;
    message: string;
    rejectReason?: string;
    complaintType: GetClientComplaint.ComplaintTypeEnum;
    status: GetClientComplaint.StatusEnum;
}
export namespace GetClientComplaint {
    export type ComplaintTypeEnum = 'INCOMPETENT_EXPERT' | 'IMPOLITE_EXPERT' | 'TECHNICAL_ISSUES' | 'OTHER';
    export const ComplaintTypeEnum = {
        INCOMPETENTEXPERT: 'INCOMPETENT_EXPERT' as ComplaintTypeEnum,
        IMPOLITEEXPERT: 'IMPOLITE_EXPERT' as ComplaintTypeEnum,
        TECHNICALISSUES: 'TECHNICAL_ISSUES' as ComplaintTypeEnum,
        OTHER: 'OTHER' as ComplaintTypeEnum
    }
    export type StatusEnum = 'NEW' | 'REJECTED_BY_EXPERT' | 'ACCEPTED_BY_EXPERT' | 'REJECTED_BY_ADMIN' | 'ACCEPTED_BY_ADMIN' | 'CANCELLED' | 'IGNORED_BY_EXPERT';
    export const StatusEnum = {
        NEW: 'NEW' as StatusEnum,
        REJECTEDBYEXPERT: 'REJECTED_BY_EXPERT' as StatusEnum,
        ACCEPTEDBYEXPERT: 'ACCEPTED_BY_EXPERT' as StatusEnum,
        REJECTEDBYADMIN: 'REJECTED_BY_ADMIN' as StatusEnum,
        ACCEPTEDBYADMIN: 'ACCEPTED_BY_ADMIN' as StatusEnum,
        CANCELLED: 'CANCELLED' as StatusEnum,
        IGNOREDBYEXPERT: 'IGNORED_BY_EXPERT' as StatusEnum
    }
}
