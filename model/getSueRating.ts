/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.32
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface GetSueRating {
    id: string;
    sueId: string;
    clientId: string;
    expertId: string;
    serviceId: string;
    rate: GetSueRating.RateEnum;
    tags: Array<string>;
}
export namespace GetSueRating {
    export type RateEnum = 'POSITIVE' | 'NEGATIVE';
    export const RateEnum = {
        POSITIVE: 'POSITIVE' as RateEnum,
        NEGATIVE: 'NEGATIVE' as RateEnum
    }
}
