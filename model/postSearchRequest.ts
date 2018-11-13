/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.33
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PriceSearchParam } from './priceSearchParam';


export interface PostSearchRequest {
    query: string;
    price: Array<PriceSearchParam>;
    languages: Array<string>;
    serviceType?: string;
    tags: Array<string>;
    offset?: number;
    count: number;
    threshold?: number;
}
