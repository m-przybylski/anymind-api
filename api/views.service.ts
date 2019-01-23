/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.53
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

import { ClientCallSummary } from '../model/clientCallSummary';
import { ExpertCallSummary } from '../model/expertCallSummary';
import { ExpertProfileView } from '../model/expertProfileView';
import { GetActivityFilters } from '../model/getActivityFilters';
import { GetCallDetails } from '../model/getCallDetails';
import { GetClientActivities } from '../model/getClientActivities';
import { GetDashboardClientExperts } from '../model/getDashboardClientExperts';
import { GetMobileServiceDetails } from '../model/getMobileServiceDetails';
import { GetPayoutDetails } from '../model/getPayoutDetails';
import { GetProfileActivities } from '../model/getProfileActivities';
import { OrganizationProfileView } from '../model/organizationProfileView';
import { SimpleExpertProfileView } from '../model/simpleExpertProfileView';
import { SimpleOrganizationProfileView } from '../model/simpleOrganizationProfileView';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ViewsService {

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
     * Get call summary for client
     * 
     * @param sueId sueId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getClientCallSummaryRoute(sueId: string, observe?: 'body', reportProgress?: boolean): Observable<ClientCallSummary>;
    public getClientCallSummaryRoute(sueId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ClientCallSummary>>;
    public getClientCallSummaryRoute(sueId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ClientCallSummary>>;
    public getClientCallSummaryRoute(sueId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sueId === null || sueId === undefined) {
            throw new Error('Required parameter sueId was null or undefined when calling getClientCallSummaryRoute.');
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

        return this.httpClient.get<ClientCallSummary>(`${this.basePath}/api/views/dashboard/sue/${encodeURIComponent(String(sueId))}/call-summary/client`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get dashboard activity filters for client
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDashboardActivitiesClientFiltersRoute(observe?: 'body', reportProgress?: boolean): Observable<GetActivityFilters>;
    public getDashboardActivitiesClientFiltersRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetActivityFilters>>;
    public getDashboardActivitiesClientFiltersRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetActivityFilters>>;
    public getDashboardActivitiesClientFiltersRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<GetActivityFilters>(`${this.basePath}/api/views/dashboard/activities/client/filters`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get dashboard activities for client
     * 
     * @param activityType ActivityType
     * @param profileId AccountId
     * @param serviceId ServiceId
     * @param dateFrom Instant
     * @param dateTo Instant
     * @param limit Int
     * @param offset Int
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDashboardActivitiesClientRoute(activityType?: string, profileId?: string, serviceId?: string, dateFrom?: string, dateTo?: string, limit?: string, offset?: string, observe?: 'body', reportProgress?: boolean): Observable<GetClientActivities>;
    public getDashboardActivitiesClientRoute(activityType?: string, profileId?: string, serviceId?: string, dateFrom?: string, dateTo?: string, limit?: string, offset?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetClientActivities>>;
    public getDashboardActivitiesClientRoute(activityType?: string, profileId?: string, serviceId?: string, dateFrom?: string, dateTo?: string, limit?: string, offset?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetClientActivities>>;
    public getDashboardActivitiesClientRoute(activityType?: string, profileId?: string, serviceId?: string, dateFrom?: string, dateTo?: string, limit?: string, offset?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (activityType !== undefined) {
            queryParameters = queryParameters.set('activityType', <any>activityType);
        }
        if (profileId !== undefined) {
            queryParameters = queryParameters.set('profileId', <any>profileId);
        }
        if (serviceId !== undefined) {
            queryParameters = queryParameters.set('serviceId', <any>serviceId);
        }
        if (dateFrom !== undefined) {
            queryParameters = queryParameters.set('dateFrom', <any>dateFrom);
        }
        if (dateTo !== undefined) {
            queryParameters = queryParameters.set('dateTo', <any>dateTo);
        }
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

        return this.httpClient.get<GetClientActivities>(`${this.basePath}/api/views/dashboard/activities/client`,
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
     * Get dashboard activity filters for profile
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDashboardActivitiesProfileFiltersRoute(observe?: 'body', reportProgress?: boolean): Observable<GetActivityFilters>;
    public getDashboardActivitiesProfileFiltersRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetActivityFilters>>;
    public getDashboardActivitiesProfileFiltersRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetActivityFilters>>;
    public getDashboardActivitiesProfileFiltersRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<GetActivityFilters>(`${this.basePath}/api/views/dashboard/activities/profile/filters`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get dashboard activities for profile
     * 
     * @param activityType ActivityType
     * @param profileId AccountId
     * @param serviceId ServiceId
     * @param dateFrom Instant
     * @param dateTo Instant
     * @param limit Int
     * @param offset Int
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDashboardActivitiesProfileRoute(activityType?: string, profileId?: string, serviceId?: string, dateFrom?: string, dateTo?: string, limit?: string, offset?: string, observe?: 'body', reportProgress?: boolean): Observable<GetProfileActivities>;
    public getDashboardActivitiesProfileRoute(activityType?: string, profileId?: string, serviceId?: string, dateFrom?: string, dateTo?: string, limit?: string, offset?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetProfileActivities>>;
    public getDashboardActivitiesProfileRoute(activityType?: string, profileId?: string, serviceId?: string, dateFrom?: string, dateTo?: string, limit?: string, offset?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetProfileActivities>>;
    public getDashboardActivitiesProfileRoute(activityType?: string, profileId?: string, serviceId?: string, dateFrom?: string, dateTo?: string, limit?: string, offset?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (activityType !== undefined) {
            queryParameters = queryParameters.set('activityType', <any>activityType);
        }
        if (profileId !== undefined) {
            queryParameters = queryParameters.set('profileId', <any>profileId);
        }
        if (serviceId !== undefined) {
            queryParameters = queryParameters.set('serviceId', <any>serviceId);
        }
        if (dateFrom !== undefined) {
            queryParameters = queryParameters.set('dateFrom', <any>dateFrom);
        }
        if (dateTo !== undefined) {
            queryParameters = queryParameters.set('dateTo', <any>dateTo);
        }
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

        return this.httpClient.get<GetProfileActivities>(`${this.basePath}/api/views/dashboard/activities/profile`,
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
     * Get service usage event details
     * 
     * @param sueId sueId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDashboardCallDetailsRoute(sueId: string, observe?: 'body', reportProgress?: boolean): Observable<GetCallDetails>;
    public getDashboardCallDetailsRoute(sueId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetCallDetails>>;
    public getDashboardCallDetailsRoute(sueId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetCallDetails>>;
    public getDashboardCallDetailsRoute(sueId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sueId === null || sueId === undefined) {
            throw new Error('Required parameter sueId was null or undefined when calling getDashboardCallDetailsRoute.');
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

        return this.httpClient.get<GetCallDetails>(`${this.basePath}/api/views/dashboard/sue/${encodeURIComponent(String(sueId))}/details`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get client dashboard
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDashboardClientExpertsRoute(observe?: 'body', reportProgress?: boolean): Observable<GetDashboardClientExperts>;
    public getDashboardClientExpertsRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetDashboardClientExperts>>;
    public getDashboardClientExpertsRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetDashboardClientExperts>>;
    public getDashboardClientExpertsRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<GetDashboardClientExperts>(`${this.basePath}/api/views/dashboard/client/experts`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get payout details
     * 
     * @param payoutId payoutId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDashboardPayoutDetailsRoute(payoutId: string, observe?: 'body', reportProgress?: boolean): Observable<GetPayoutDetails>;
    public getDashboardPayoutDetailsRoute(payoutId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetPayoutDetails>>;
    public getDashboardPayoutDetailsRoute(payoutId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetPayoutDetails>>;
    public getDashboardPayoutDetailsRoute(payoutId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (payoutId === null || payoutId === undefined) {
            throw new Error('Required parameter payoutId was null or undefined when calling getDashboardPayoutDetailsRoute.');
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

        return this.httpClient.get<GetPayoutDetails>(`${this.basePath}/api/views/dashboard/payout/${encodeURIComponent(String(payoutId))}/details`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get call summary for expert
     * 
     * @param sueId sueId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getExpertCallSummaryRoute(sueId: string, observe?: 'body', reportProgress?: boolean): Observable<ExpertCallSummary>;
    public getExpertCallSummaryRoute(sueId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ExpertCallSummary>>;
    public getExpertCallSummaryRoute(sueId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ExpertCallSummary>>;
    public getExpertCallSummaryRoute(sueId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sueId === null || sueId === undefined) {
            throw new Error('Required parameter sueId was null or undefined when calling getExpertCallSummaryRoute.');
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

        return this.httpClient.get<ExpertCallSummary>(`${this.basePath}/api/views/dashboard/sue/${encodeURIComponent(String(sueId))}/call-summary/expert`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get simple expert profile
     * 
     * @param profileId profileId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMobileExpertProfileRoute(profileId: string, observe?: 'body', reportProgress?: boolean): Observable<SimpleExpertProfileView>;
    public getMobileExpertProfileRoute(profileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SimpleExpertProfileView>>;
    public getMobileExpertProfileRoute(profileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SimpleExpertProfileView>>;
    public getMobileExpertProfileRoute(profileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling getMobileExpertProfileRoute.');
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

        return this.httpClient.get<SimpleExpertProfileView>(`${this.basePath}/api/views/mobile/profile/${encodeURIComponent(String(profileId))}/expert`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get simple organization profile
     * 
     * @param profileId profileId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMobileOrganizationProfileRoute(profileId: string, observe?: 'body', reportProgress?: boolean): Observable<SimpleOrganizationProfileView>;
    public getMobileOrganizationProfileRoute(profileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SimpleOrganizationProfileView>>;
    public getMobileOrganizationProfileRoute(profileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SimpleOrganizationProfileView>>;
    public getMobileOrganizationProfileRoute(profileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling getMobileOrganizationProfileRoute.');
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

        return this.httpClient.get<SimpleOrganizationProfileView>(`${this.basePath}/api/views/mobile/profile/${encodeURIComponent(String(profileId))}/organization`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get service details
     * 
     * @param serviceId serviceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMobileServiceDetailsRoute(serviceId: string, observe?: 'body', reportProgress?: boolean): Observable<GetMobileServiceDetails>;
    public getMobileServiceDetailsRoute(serviceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetMobileServiceDetails>>;
    public getMobileServiceDetailsRoute(serviceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetMobileServiceDetails>>;
    public getMobileServiceDetailsRoute(serviceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (serviceId === null || serviceId === undefined) {
            throw new Error('Required parameter serviceId was null or undefined when calling getMobileServiceDetailsRoute.');
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

        return this.httpClient.get<GetMobileServiceDetails>(`${this.basePath}/api/views/mobile/service/${encodeURIComponent(String(serviceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get full expert profile
     * 
     * @param profileId profileId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getWebExpertProfileRoute(profileId: string, observe?: 'body', reportProgress?: boolean): Observable<ExpertProfileView>;
    public getWebExpertProfileRoute(profileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ExpertProfileView>>;
    public getWebExpertProfileRoute(profileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ExpertProfileView>>;
    public getWebExpertProfileRoute(profileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling getWebExpertProfileRoute.');
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

        return this.httpClient.get<ExpertProfileView>(`${this.basePath}/api/views/profile/${encodeURIComponent(String(profileId))}/expert`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get full organization profile
     * 
     * @param profileId profileId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getWebOrganizationProfileRoute(profileId: string, observe?: 'body', reportProgress?: boolean): Observable<OrganizationProfileView>;
    public getWebOrganizationProfileRoute(profileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OrganizationProfileView>>;
    public getWebOrganizationProfileRoute(profileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OrganizationProfileView>>;
    public getWebOrganizationProfileRoute(profileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling getWebOrganizationProfileRoute.');
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

        return this.httpClient.get<OrganizationProfileView>(`${this.basePath}/api/views/profile/${encodeURIComponent(String(profileId))}/organization`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
