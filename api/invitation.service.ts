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

import { DeleteInvitations } from '../model/deleteInvitations';
import { GetInvitation } from '../model/getInvitation';
import { PostInvitations } from '../model/postInvitations';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class InvitationService {

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
     * Delete invitations
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteInvitationsRoute(body: DeleteInvitations, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteInvitationsRoute(body: DeleteInvitations, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteInvitationsRoute(body: DeleteInvitations, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteInvitationsRoute(body: DeleteInvitations, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling deleteInvitationsRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/invitations/delete`,
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
     * Invitation
     * 
     * @param invitationToken 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInvitationRoute(invitationToken: string, observe?: 'body', reportProgress?: boolean): Observable<GetInvitation>;
    public getInvitationRoute(invitationToken: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetInvitation>>;
    public getInvitationRoute(invitationToken: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetInvitation>>;
    public getInvitationRoute(invitationToken: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (invitationToken === null || invitationToken === undefined) {
            throw new Error('Required parameter invitationToken was null or undefined when calling getInvitationRoute.');
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

        return this.httpClient.get<GetInvitation>(`${this.basePath}/api/invitations/${encodeURIComponent(String(invitationToken))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all user invitations
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInvitationsRoute(observe?: 'body', reportProgress?: boolean): Observable<Array<GetInvitation>>;
    public getInvitationsRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetInvitation>>>;
    public getInvitationsRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetInvitation>>>;
    public getInvitationsRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<GetInvitation>>(`${this.basePath}/api/invitations`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Accept invitation
     * 
     * @param invitationId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postInvitationAcceptRoute(invitationId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postInvitationAcceptRoute(invitationId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postInvitationAcceptRoute(invitationId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postInvitationAcceptRoute(invitationId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (invitationId === null || invitationId === undefined) {
            throw new Error('Required parameter invitationId was null or undefined when calling postInvitationAcceptRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/invitations/${encodeURIComponent(String(invitationId))}/accept`,
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
     * Reject invitation
     * 
     * @param invitationId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postInvitationRejectRoute(invitationId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postInvitationRejectRoute(invitationId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postInvitationRejectRoute(invitationId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postInvitationRejectRoute(invitationId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (invitationId === null || invitationId === undefined) {
            throw new Error('Required parameter invitationId was null or undefined when calling postInvitationRejectRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/invitations/${encodeURIComponent(String(invitationId))}/reject`,
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
     * Create invitation
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postInvitationRoute(body: PostInvitations, observe?: 'body', reportProgress?: boolean): Observable<Array<GetInvitation>>;
    public postInvitationRoute(body: PostInvitations, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetInvitation>>>;
    public postInvitationRoute(body: PostInvitations, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetInvitation>>>;
    public postInvitationRoute(body: PostInvitations, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postInvitationRoute.');
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

        return this.httpClient.post<Array<GetInvitation>>(`${this.basePath}/api/invitations`,
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
     * Mark invitation as displayed
     * 
     * @param invitationId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postInvitationsDisplayedRoute(invitationId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postInvitationsDisplayedRoute(invitationId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postInvitationsDisplayedRoute(invitationId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postInvitationsDisplayedRoute(invitationId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (invitationId === null || invitationId === undefined) {
            throw new Error('Required parameter invitationId was null or undefined when calling postInvitationsDisplayedRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/invitations/${encodeURIComponent(String(invitationId))}/displayed`,
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
