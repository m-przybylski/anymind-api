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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { GetMsisdn } from '../model/getMsisdn';
import { GetRecoverMethod } from '../model/getRecoverMethod';
import { PostRecoverPassword } from '../model/postRecoverPassword';
import { PostRecoverPasswordVerifyEmailToken } from '../model/postRecoverPasswordVerifyEmailToken';
import { PostRecoverPasswordVerifyMsisdnToken } from '../model/postRecoverPasswordVerifyMsisdnToken';
import { PutRecoverPasswordEmail } from '../model/putRecoverPasswordEmail';
import { PutRecoverPasswordMsisdn } from '../model/putRecoverPasswordMsisdn';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RecoverPasswordService {

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
     * Create recover password
     * 
     * @param body New recover password
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postRecoverPasswordRoute(body: PostRecoverPassword, observe?: 'body', reportProgress?: boolean): Observable<GetRecoverMethod>;
    public postRecoverPasswordRoute(body: PostRecoverPassword, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetRecoverMethod>>;
    public postRecoverPasswordRoute(body: PostRecoverPassword, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetRecoverMethod>>;
    public postRecoverPasswordRoute(body: PostRecoverPassword, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postRecoverPasswordRoute.');
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

        return this.httpClient.post<GetRecoverMethod>(`${this.basePath}/api/recover-password`,
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
     * Verify email token
     * 
     * @param body Verify email token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postRecoverPasswordVerifyEmailRoute(body: PostRecoverPasswordVerifyEmailToken, observe?: 'body', reportProgress?: boolean): Observable<GetMsisdn>;
    public postRecoverPasswordVerifyEmailRoute(body: PostRecoverPasswordVerifyEmailToken, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetMsisdn>>;
    public postRecoverPasswordVerifyEmailRoute(body: PostRecoverPasswordVerifyEmailToken, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetMsisdn>>;
    public postRecoverPasswordVerifyEmailRoute(body: PostRecoverPasswordVerifyEmailToken, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postRecoverPasswordVerifyEmailRoute.');
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

        return this.httpClient.post<GetMsisdn>(`${this.basePath}/api/recover-password/verify/email`,
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
     * Verify Msisdn token
     * 
     * @param body Verify Msisdn token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postRecoverPasswordVerifyMsisdnRoute(body: PostRecoverPasswordVerifyMsisdnToken, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postRecoverPasswordVerifyMsisdnRoute(body: PostRecoverPasswordVerifyMsisdnToken, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postRecoverPasswordVerifyMsisdnRoute(body: PostRecoverPasswordVerifyMsisdnToken, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postRecoverPasswordVerifyMsisdnRoute(body: PostRecoverPasswordVerifyMsisdnToken, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postRecoverPasswordVerifyMsisdnRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/recover-password/verify/msisdn`,
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
     * Update password
     * 
     * @param body update password
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putRecoverPasswordEmailRoute(body: PutRecoverPasswordEmail, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putRecoverPasswordEmailRoute(body: PutRecoverPasswordEmail, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putRecoverPasswordEmailRoute(body: PutRecoverPasswordEmail, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putRecoverPasswordEmailRoute(body: PutRecoverPasswordEmail, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putRecoverPasswordEmailRoute.');
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

        return this.httpClient.put<any>(`${this.basePath}/api/recover-password/email`,
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
     * Update password
     * 
     * @param body update password
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putRecoverPasswordMsisdnRoute(body: PutRecoverPasswordMsisdn, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putRecoverPasswordMsisdnRoute(body: PutRecoverPasswordMsisdn, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putRecoverPasswordMsisdnRoute(body: PutRecoverPasswordMsisdn, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putRecoverPasswordMsisdnRoute(body: PutRecoverPasswordMsisdn, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putRecoverPasswordMsisdnRoute.');
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

        return this.httpClient.put<any>(`${this.basePath}/api/recover-password/msisdn`,
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
