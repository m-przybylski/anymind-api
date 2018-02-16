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

import { Observable }                                        from 'rxjs/Observable';

import { AccountPresenceStatus } from '../model/accountPresenceStatus';
import { Function1RequestContextFutureRouteResult } from '../model/function1RequestContextFutureRouteResult';
import { GetExpertVisibility } from '../model/getExpertVisibility';
import { PostExpertsPresence } from '../model/postExpertsPresence';
import { PostRegisterForExpertAvailability } from '../model/postRegisterForExpertAvailability';
import { PostRegisterForServiceAvailability } from '../model/postRegisterForServiceAvailability';
import { PostServicesPresence } from '../model/postServicesPresence';
import { ServicePresenceStatus } from '../model/servicePresenceStatus';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PresenceService {

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
     * Notify when expert is available
     * 
     * @param expertId expertId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public expertAvailableNotificationRoute(expertId: PostRegisterForExpertAvailability, observe?: 'body', reportProgress?: boolean): Observable<Function1RequestContextFutureRouteResult>;
    public expertAvailableNotificationRoute(expertId: PostRegisterForExpertAvailability, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Function1RequestContextFutureRouteResult>>;
    public expertAvailableNotificationRoute(expertId: PostRegisterForExpertAvailability, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Function1RequestContextFutureRouteResult>>;
    public expertAvailableNotificationRoute(expertId: PostRegisterForExpertAvailability, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (expertId === null || expertId === undefined) {
            throw new Error('Required parameter expertId was null or undefined when calling expertAvailableNotificationRoute.');
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

        return this.httpClient.post<Function1RequestContextFutureRouteResult>(`${this.basePath}/api/presence/notification/expert`,
            expertId,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Set expert as invisible
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public expertInvisibleRoute(observe?: 'body', reportProgress?: boolean): Observable<Function1RequestContextFutureRouteResult>;
    public expertInvisibleRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Function1RequestContextFutureRouteResult>>;
    public expertInvisibleRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Function1RequestContextFutureRouteResult>>;
    public expertInvisibleRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<Function1RequestContextFutureRouteResult>(`${this.basePath}/api/presence/expert/invisible`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get expert visibility
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public expertVisibilityRoute(observe?: 'body', reportProgress?: boolean): Observable<GetExpertVisibility>;
    public expertVisibilityRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetExpertVisibility>>;
    public expertVisibilityRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetExpertVisibility>>;
    public expertVisibilityRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<GetExpertVisibility>(`${this.basePath}/api/presence/expert/visibility`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Set expert as visible
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public expertVisibleRoute(observe?: 'body', reportProgress?: boolean): Observable<Function1RequestContextFutureRouteResult>;
    public expertVisibleRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Function1RequestContextFutureRouteResult>>;
    public expertVisibleRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Function1RequestContextFutureRouteResult>>;
    public expertVisibleRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<Function1RequestContextFutureRouteResult>(`${this.basePath}/api/presence/expert/visible`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Notify when service is available
     * 
     * @param serviceId serviceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public serviceAvailableNotificationRoute(serviceId: PostRegisterForServiceAvailability, observe?: 'body', reportProgress?: boolean): Observable<Function1RequestContextFutureRouteResult>;
    public serviceAvailableNotificationRoute(serviceId: PostRegisterForServiceAvailability, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Function1RequestContextFutureRouteResult>>;
    public serviceAvailableNotificationRoute(serviceId: PostRegisterForServiceAvailability, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Function1RequestContextFutureRouteResult>>;
    public serviceAvailableNotificationRoute(serviceId: PostRegisterForServiceAvailability, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling serviceAvailableNotificationRoute.');
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

        return this.httpClient.post<Function1RequestContextFutureRouteResult>(`${this.basePath}/api/presence/notification/service`,
            serviceId,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Services presence status
     * 
     * @param serviceIds serviceIds
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public servicePresenceRoute(serviceIds: PostServicesPresence, observe?: 'body', reportProgress?: boolean): Observable<Array<ServicePresenceStatus>>;
    public servicePresenceRoute(serviceIds: PostServicesPresence, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ServicePresenceStatus>>>;
    public servicePresenceRoute(serviceIds: PostServicesPresence, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ServicePresenceStatus>>>;
    public servicePresenceRoute(serviceIds: PostServicesPresence, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (serviceIds === null || serviceIds === undefined) {
            throw new Error('Required parameter serviceIds was null or undefined when calling servicePresenceRoute.');
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

        return this.httpClient.post<Array<ServicePresenceStatus>>(`${this.basePath}/api/presence/service`,
            serviceIds,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Users presence status
     * 
     * @param expertIds expertIds
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public userPresenceRoute(expertIds: PostExpertsPresence, observe?: 'body', reportProgress?: boolean): Observable<Array<AccountPresenceStatus>>;
    public userPresenceRoute(expertIds: PostExpertsPresence, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<AccountPresenceStatus>>>;
    public userPresenceRoute(expertIds: PostExpertsPresence, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<AccountPresenceStatus>>>;
    public userPresenceRoute(expertIds: PostExpertsPresence, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (expertIds === null || expertIds === undefined) {
            throw new Error('Required parameter expertIds was null or undefined when calling userPresenceRoute.');
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

        return this.httpClient.post<Array<AccountPresenceStatus>>(`${this.basePath}/api/presence/expert`,
            expertIds,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
