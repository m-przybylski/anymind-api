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

import { AccountPresenceStatus } from '../model/accountPresenceStatus';
import { GetExpertVisibility } from '../model/getExpertVisibility';
import { PostExpertsPresence } from '../model/postExpertsPresence';
import { PostRegisterForWidgetAvailability } from '../model/postRegisterForWidgetAvailability';
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
     * Set expert as invisible
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public expertInvisibleRoute(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public expertInvisibleRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public expertInvisibleRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
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

        return this.httpClient.post<any>(`${this.basePath}/api/presence/expert/invisible`,
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
    public expertVisibleRoute(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public expertVisibleRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public expertVisibleRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
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

        return this.httpClient.post<any>(`${this.basePath}/api/presence/expert/visible`,
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

    /**
     * Notify when widget is available
     * 
     * @param body body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public widgetAvailabilityNotificationRoute(body: PostRegisterForWidgetAvailability, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public widgetAvailabilityNotificationRoute(body: PostRegisterForWidgetAvailability, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public widgetAvailabilityNotificationRoute(body: PostRegisterForWidgetAvailability, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public widgetAvailabilityNotificationRoute(body: PostRegisterForWidgetAvailability, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling widgetAvailabilityNotificationRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/presence/notification/widget`,
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
