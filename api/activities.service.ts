/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.40
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

import { GetClientActivities } from '../model/getClientActivities';
import { GetImportantActivitiesCounters } from '../model/getImportantActivitiesCounters';
import { GetProfileActivities } from '../model/getProfileActivities';
import { GetProfileActivity } from '../model/getProfileActivity';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ActivitiesService {

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
     * Get important activities for client
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getClientImportantActivitiesRoute(observe?: 'body', reportProgress?: boolean): Observable<GetClientActivities>;
    public getClientImportantActivitiesRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetClientActivities>>;
    public getClientImportantActivitiesRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetClientActivities>>;
    public getClientImportantActivitiesRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<GetClientActivities>(`${this.basePath}/api/activities/important/client`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get activities for expert profile
     * 
     * @param limit Int
     * @param offset Int
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getExpertProfileActivitiesRoute(limit?: string, offset?: string, observe?: 'body', reportProgress?: boolean): Observable<GetProfileActivities>;
    public getExpertProfileActivitiesRoute(limit?: string, offset?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetProfileActivities>>;
    public getExpertProfileActivitiesRoute(limit?: string, offset?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetProfileActivities>>;
    public getExpertProfileActivitiesRoute(limit?: string, offset?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<GetProfileActivities>(`${this.basePath}/api/activities/profile/expert`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get important activities for expert profile
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getExpertProfileImportantActivitiesRoute(observe?: 'body', reportProgress?: boolean): Observable<GetProfileActivities>;
    public getExpertProfileImportantActivitiesRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetProfileActivities>>;
    public getExpertProfileImportantActivitiesRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetProfileActivities>>;
    public getExpertProfileImportantActivitiesRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<GetProfileActivities>(`${this.basePath}/api/activities/important/profile/expert`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get counters of important activities
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getImportantActivitiesCountersRoute(observe?: 'body', reportProgress?: boolean): Observable<GetImportantActivitiesCounters>;
    public getImportantActivitiesCountersRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetImportantActivitiesCounters>>;
    public getImportantActivitiesCountersRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetImportantActivitiesCounters>>;
    public getImportantActivitiesCountersRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<GetImportantActivitiesCounters>(`${this.basePath}/api/activities/important/counters`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get activities for organization profile
     * 
     * @param limit Int
     * @param offset Int
     * @param filter ActivityFilter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOrganizationProfileActivitiesRoute(limit?: string, offset?: string, filter?: string, observe?: 'body', reportProgress?: boolean): Observable<GetProfileActivities>;
    public getOrganizationProfileActivitiesRoute(limit?: string, offset?: string, filter?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetProfileActivities>>;
    public getOrganizationProfileActivitiesRoute(limit?: string, offset?: string, filter?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetProfileActivities>>;
    public getOrganizationProfileActivitiesRoute(limit?: string, offset?: string, filter?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (limit !== undefined) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (offset !== undefined) {
            queryParameters = queryParameters.set('offset', <any>offset);
        }
        if (filter !== undefined) {
            queryParameters = queryParameters.set('filter', <any>filter);
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

        return this.httpClient.get<GetProfileActivities>(`${this.basePath}/api/activities/profile/organization`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get important activities for organization profile
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOrganizationProfileImportantActivitiesRoute(observe?: 'body', reportProgress?: boolean): Observable<GetProfileActivities>;
    public getOrganizationProfileImportantActivitiesRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetProfileActivities>>;
    public getOrganizationProfileImportantActivitiesRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetProfileActivities>>;
    public getOrganizationProfileImportantActivitiesRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<GetProfileActivities>(`${this.basePath}/api/activities/important/profile/organization`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get activity for profile
     * 
     * @param activityId activityId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProfileActivityRoute(activityId: string, observe?: 'body', reportProgress?: boolean): Observable<GetProfileActivity>;
    public getProfileActivityRoute(activityId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetProfileActivity>>;
    public getProfileActivityRoute(activityId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetProfileActivity>>;
    public getProfileActivityRoute(activityId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (activityId === null || activityId === undefined) {
            throw new Error('Required parameter activityId was null or undefined when calling getProfileActivityRoute.');
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

        return this.httpClient.get<GetProfileActivity>(`${this.basePath}/api/activities/${encodeURIComponent(String(activityId))}/profile`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Mark client activity as unimportant
     * 
     * @param activityId activityId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putUnimportantClientActivityRoute(activityId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putUnimportantClientActivityRoute(activityId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putUnimportantClientActivityRoute(activityId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putUnimportantClientActivityRoute(activityId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (activityId === null || activityId === undefined) {
            throw new Error('Required parameter activityId was null or undefined when calling putUnimportantClientActivityRoute.');
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

        return this.httpClient.put<any>(`${this.basePath}/api/activities/${encodeURIComponent(String(activityId))}/unimportant/client`,
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
     * Mark profile activity as unimportant
     * 
     * @param activityId activityId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putUnimportantProfileActivityRoute(activityId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putUnimportantProfileActivityRoute(activityId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putUnimportantProfileActivityRoute(activityId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putUnimportantProfileActivityRoute(activityId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (activityId === null || activityId === undefined) {
            throw new Error('Required parameter activityId was null or undefined when calling putUnimportantProfileActivityRoute.');
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

        return this.httpClient.put<any>(`${this.basePath}/api/activities/${encodeURIComponent(String(activityId))}/unimportant/profile`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
