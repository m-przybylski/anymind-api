/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.47
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface GetEmployment {
    id: string;
    serviceId: string;
    serviceOwnerId: string;
    employeeId: string;
    usageCounter: number;
    commentCounter: number;
    ratingCounter: number;
    rating?: number;
    createdAt: Date;
}
