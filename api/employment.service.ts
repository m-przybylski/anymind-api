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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { DeleteEmployments } from '../model/deleteEmployments';
import { ExpertProfileWithEmployments } from '../model/expertProfileWithEmployments';
import { GetComment } from '../model/getComment';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EmploymentService {

    protected basePath = 'https://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Delete user employment for service
     * 
     * @param serviceId serviceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteEmploymentForServiceRoute(serviceId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteEmploymentForServiceRoute(serviceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteEmploymentForServiceRoute(serviceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteEmploymentForServiceRoute(serviceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling deleteEmploymentForServiceRoute.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/api/employments/service/${encodeURIComponent(String(serviceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete employment
     * 
     * @param employmentId employmentId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteEmploymentRoute(employmentId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteEmploymentRoute(employmentId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteEmploymentRoute(employmentId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteEmploymentRoute(employmentId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (employmentId === null || employmentId === undefined) {
            throw new Error('Required parameter employmentId was null or undefined when calling deleteEmploymentRoute.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/api/employments/${encodeURIComponent(String(employmentId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete employments
     * 
     * @param employeeIds employeeIds
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteEmploymentsRoute(employeeIds: DeleteEmployments, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteEmploymentsRoute(employeeIds: DeleteEmployments, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteEmploymentsRoute(employeeIds: DeleteEmployments, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteEmploymentsRoute(employeeIds: DeleteEmployments, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (employeeIds === null || employeeIds === undefined) {
            throw new Error('Required parameter employeeIds was null or undefined when calling deleteEmploymentsRoute.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/api/employments/delete`,
            employeeIds,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List of employees profile details with their employments
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEmployeesRoute(observe?: 'body', reportProgress?: boolean): Observable<Array<ExpertProfileWithEmployments>>;
    public getEmployeesRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ExpertProfileWithEmployments>>>;
    public getEmployeesRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ExpertProfileWithEmployments>>>;
    public getEmployeesRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<ExpertProfileWithEmployments>>(`${this.basePath}/api/employments`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List comments for employment
     * 
     * @param employmentId employmentId
     * @param limit Int
     * @param offset Int
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEmploymentCommentsRoute(employmentId: string, limit: string, offset: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetComment>>;
    public getEmploymentCommentsRoute(employmentId: string, limit: string, offset: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetComment>>>;
    public getEmploymentCommentsRoute(employmentId: string, limit: string, offset: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetComment>>>;
    public getEmploymentCommentsRoute(employmentId: string, limit: string, offset: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (employmentId === null || employmentId === undefined) {
            throw new Error('Required parameter employmentId was null or undefined when calling getEmploymentCommentsRoute.');
        }
        if (limit === null || limit === undefined) {
            throw new Error('Required parameter limit was null or undefined when calling getEmploymentCommentsRoute.');
        }
        if (offset === null || offset === undefined) {
            throw new Error('Required parameter offset was null or undefined when calling getEmploymentCommentsRoute.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (limit !== undefined) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<GetComment>>(`${this.basePath}/api/employments/${encodeURIComponent(String(employmentId))}/comments`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
