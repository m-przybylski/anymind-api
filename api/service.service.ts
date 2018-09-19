/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
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

import { GetService } from '../model/getService';
import { GetServiceGrossPrice } from '../model/getServiceGrossPrice';
import { GetServiceTags } from '../model/getServiceTags';
import { GetServiceWithEmployees } from '../model/getServiceWithEmployees';
import { GetServiceWithInvitations } from '../model/getServiceWithInvitations';
import { PostService } from '../model/postService';
import { PostServicesIds } from '../model/postServicesIds';
import { PutService } from '../model/putService';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ServiceService {

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
     * Remove service by id
     * 
     * @param serviceId serviceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteServiceRoute(serviceId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteServiceRoute(serviceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteServiceRoute(serviceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteServiceRoute(serviceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling deleteServiceRoute.');
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

        return this.httpClient.delete<any>(`${this.basePath}/api/services/${encodeURIComponent(String(serviceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Details of services of users
     * 
     * @param accountId accountId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProfileServicesRoute(accountId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetService>>;
    public getProfileServicesRoute(accountId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetService>>>;
    public getProfileServicesRoute(accountId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetService>>>;
    public getProfileServicesRoute(accountId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getProfileServicesRoute.');
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

        return this.httpClient.get<Array<GetService>>(`${this.basePath}/api/services/profile/${encodeURIComponent(String(accountId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get gross price of service
     * 
     * @param serviceId serviceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getServiceGrossPriceRoute(serviceId: string, observe?: 'body', reportProgress?: boolean): Observable<GetServiceGrossPrice>;
    public getServiceGrossPriceRoute(serviceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetServiceGrossPrice>>;
    public getServiceGrossPriceRoute(serviceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetServiceGrossPrice>>;
    public getServiceGrossPriceRoute(serviceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling getServiceGrossPriceRoute.');
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

        return this.httpClient.get<GetServiceGrossPrice>(`${this.basePath}/api/services/${encodeURIComponent(String(serviceId))}/gross-price`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Details of a service
     * 
     * @param serviceId serviceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getServiceRoute(serviceId: string, observe?: 'body', reportProgress?: boolean): Observable<GetService>;
    public getServiceRoute(serviceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetService>>;
    public getServiceRoute(serviceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetService>>;
    public getServiceRoute(serviceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling getServiceRoute.');
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

        return this.httpClient.get<GetService>(`${this.basePath}/api/services/${encodeURIComponent(String(serviceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get suggested employees
     * 
     * @param expression expression
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSuggestionsRoute(expression: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetService>>;
    public getSuggestionsRoute(expression: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetService>>>;
    public getSuggestionsRoute(expression: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetService>>>;
    public getSuggestionsRoute(expression: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (expression === null || expression === undefined) {
            throw new Error('Required parameter expression was null or undefined when calling getSuggestionsRoute.');
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

        return this.httpClient.get<Array<GetService>>(`${this.basePath}/api/services/suggest/${encodeURIComponent(String(expression))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get services invitations
     * You must be an service owner to list services invitations!
     * @param body serviceIds
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postServiceInvitationsRoute(body: PostServicesIds, observe?: 'body', reportProgress?: boolean): Observable<Array<GetServiceWithInvitations>>;
    public postServiceInvitationsRoute(body: PostServicesIds, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetServiceWithInvitations>>>;
    public postServiceInvitationsRoute(body: PostServicesIds, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetServiceWithInvitations>>>;
    public postServiceInvitationsRoute(body: PostServicesIds, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postServiceInvitationsRoute.');
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

        return this.httpClient.post<Array<GetServiceWithInvitations>>(`${this.basePath}/api/services/invitations`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a service
     * 
     * @param body UpdateServiceDetails
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postServiceRoute(body: PostService, observe?: 'body', reportProgress?: boolean): Observable<GetService>;
    public postServiceRoute(body: PostService, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetService>>;
    public postServiceRoute(body: PostService, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetService>>;
    public postServiceRoute(body: PostService, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postServiceRoute.');
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

        return this.httpClient.post<GetService>(`${this.basePath}/api/services`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Details of a service and employees
     * 
     * @param body serviceIds
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postServiceWithEmployeesRoute(body: PostServicesIds, observe?: 'body', reportProgress?: boolean): Observable<Array<GetServiceWithEmployees>>;
    public postServiceWithEmployeesRoute(body: PostServicesIds, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetServiceWithEmployees>>>;
    public postServiceWithEmployeesRoute(body: PostServicesIds, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetServiceWithEmployees>>>;
    public postServiceWithEmployeesRoute(body: PostServicesIds, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postServiceWithEmployeesRoute.');
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

        return this.httpClient.post<Array<GetServiceWithEmployees>>(`${this.basePath}/api/services/employees`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get services tags
     * 
     * @param body UpdateServiceDetails
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postServicesTagsRoute(body: PostServicesIds, observe?: 'body', reportProgress?: boolean): Observable<Array<GetServiceTags>>;
    public postServicesTagsRoute(body: PostServicesIds, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetServiceTags>>>;
    public postServicesTagsRoute(body: PostServicesIds, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetServiceTags>>>;
    public postServicesTagsRoute(body: PostServicesIds, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postServicesTagsRoute.');
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

        return this.httpClient.post<Array<GetServiceTags>>(`${this.basePath}/api/services/tags`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update Details of a service
     * 
     * @param serviceId serviceId
     * @param body UpdateServiceDetails
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putServiceRoute(serviceId: string, body: PutService, observe?: 'body', reportProgress?: boolean): Observable<GetService>;
    public putServiceRoute(serviceId: string, body: PutService, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetService>>;
    public putServiceRoute(serviceId: string, body: PutService, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetService>>;
    public putServiceRoute(serviceId: string, body: PutService, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling putServiceRoute.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putServiceRoute.');
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

        return this.httpClient.put<GetService>(`${this.basePath}/api/services/${encodeURIComponent(String(serviceId))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
