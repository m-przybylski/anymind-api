/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.40
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Connection } from './connection';


export interface RatelCallDetails {
    id: string;
    orgId: string;
    created: number;
    ended?: number;
    connections: Array<Connection>;
}
