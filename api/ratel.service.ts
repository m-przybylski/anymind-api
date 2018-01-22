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

import { CreateCallHook } from '../model/createCallHook';
import { GetSUERatelCall } from '../model/getSUERatelCall';
import { PostBriefcaseUserConfig } from '../model/postBriefcaseUserConfig';
import { RatelCallDetails } from '../model/ratelCallDetails';
import { RatelRoomDetails } from '../model/ratelRoomDetails';
import { SignedAgent } from '../model/signedAgent';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RatelService {

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
     * Get config for ratel authentication
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRatelAuthConfigRoute(observe?: 'body', reportProgress?: boolean): Observable<SignedAgent>;
    public getRatelAuthConfigRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SignedAgent>>;
    public getRatelAuthConfigRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SignedAgent>>;
    public getRatelAuthConfigRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<SignedAgent>(`${this.basePath}/ratel/config`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Store briefcase user id for ratel authentication
     * 
     * @param body body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postBriefcaseUserConfigRoute(body: PostBriefcaseUserConfig, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postBriefcaseUserConfigRoute(body: PostBriefcaseUserConfig, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postBriefcaseUserConfigRoute(body: PostBriefcaseUserConfig, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postBriefcaseUserConfigRoute(body: PostBriefcaseUserConfig, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postBriefcaseUserConfigRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/ratel/config/user`,
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
     * Create call
     * 
     * @param body body
     * @param xDeviceId deviceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCreateCallRoute(body: CreateCallHook, xDeviceId: string, observe?: 'body', reportProgress?: boolean): Observable<GetSUERatelCall>;
    public postCreateCallRoute(body: CreateCallHook, xDeviceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetSUERatelCall>>;
    public postCreateCallRoute(body: CreateCallHook, xDeviceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetSUERatelCall>>;
    public postCreateCallRoute(body: CreateCallHook, xDeviceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCreateCallRoute.');
        }
        if (xDeviceId === null || xDeviceId === undefined) {
            throw new Error('Required parameter xDeviceId was null or undefined when calling postCreateCallRoute.');
        }

        let headers = this.defaultHeaders;
        if (xDeviceId !== undefined && xDeviceId !== null) {
            headers = headers.set('X-Device-Id', String(xDeviceId));
        }

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

        return this.httpClient.post<GetSUERatelCall>(`${this.basePath}/ratel/call/create`,
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
     * Close messenger room
     * 
     * @param sueId ServiceUsageEventId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postRatelCloseRoomRoute(sueId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postRatelCloseRoomRoute(sueId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postRatelCloseRoomRoute(sueId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postRatelCloseRoomRoute(sueId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sueId === null || sueId === undefined) {
            throw new Error('Required parameter sueId was null or undefined when calling postRatelCloseRoomRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/ratel/call/${encodeURIComponent(String(sueId))}/room/close`,
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
     * Create messenger room
     * 
     * @param sueId ServiceUsageEventId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postRatelCreateRoomRoute(sueId: string, observe?: 'body', reportProgress?: boolean): Observable<RatelRoomDetails>;
    public postRatelCreateRoomRoute(sueId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RatelRoomDetails>>;
    public postRatelCreateRoomRoute(sueId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RatelRoomDetails>>;
    public postRatelCreateRoomRoute(sueId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sueId === null || sueId === undefined) {
            throw new Error('Required parameter sueId was null or undefined when calling postRatelCreateRoomRoute.');
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

        return this.httpClient.post<RatelRoomDetails>(`${this.basePath}/ratel/call/${encodeURIComponent(String(sueId))}/room/create`,
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
     * Hook on call stop
     * 
     * @param sueId ServiceUsageEventId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postRatelStopCallRoute(sueId: string, observe?: 'body', reportProgress?: boolean): Observable<RatelCallDetails>;
    public postRatelStopCallRoute(sueId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RatelCallDetails>>;
    public postRatelStopCallRoute(sueId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RatelCallDetails>>;
    public postRatelStopCallRoute(sueId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sueId === null || sueId === undefined) {
            throw new Error('Required parameter sueId was null or undefined when calling postRatelStopCallRoute.');
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

        return this.httpClient.post<RatelCallDetails>(`${this.basePath}/ratel/call/${encodeURIComponent(String(sueId))}/stop`,
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
     * Mark session as registered on push notifications
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postRegisteredOnPushNotificationRoute(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postRegisteredOnPushNotificationRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postRegisteredOnPushNotificationRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postRegisteredOnPushNotificationRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}/ratel/config/push-notification`,
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
     * Start call
     * 
     * @param sueId ServiceUsageEventId
     * @param xDeviceId deviceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postStartCallRoute(sueId: string, xDeviceId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postStartCallRoute(sueId: string, xDeviceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postStartCallRoute(sueId: string, xDeviceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postStartCallRoute(sueId: string, xDeviceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sueId === null || sueId === undefined) {
            throw new Error('Required parameter sueId was null or undefined when calling postStartCallRoute.');
        }
        if (xDeviceId === null || xDeviceId === undefined) {
            throw new Error('Required parameter xDeviceId was null or undefined when calling postStartCallRoute.');
        }

        let headers = this.defaultHeaders;
        if (xDeviceId !== undefined && xDeviceId !== null) {
            headers = headers.set('X-Device-Id', String(xDeviceId));
        }

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

        return this.httpClient.post<any>(`${this.basePath}/ratel/call/${encodeURIComponent(String(sueId))}/start`,
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
