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

import { GetRegistrationSession } from '../model/getRegistrationSession';
import { GetRegistrationStatus } from '../model/getRegistrationStatus';
import { GetSessionWithAccount } from '../model/getSessionWithAccount';
import { VerificationConfirmation } from '../model/verificationConfirmation';
import { VerificationRequest } from '../model/verificationRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RegistrationService {

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
     * Get registration status
     * 
     * @param msisdn Phone number
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public checkRegistrationStatusRoute(msisdn: string, observe?: 'body', reportProgress?: boolean): Observable<GetRegistrationStatus>;
    public checkRegistrationStatusRoute(msisdn: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetRegistrationStatus>>;
    public checkRegistrationStatusRoute(msisdn: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetRegistrationStatus>>;
    public checkRegistrationStatusRoute(msisdn: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (msisdn === null || msisdn === undefined) {
            throw new Error('Required parameter msisdn was null or undefined when calling checkRegistrationStatusRoute.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (msisdn !== undefined) {
            queryParameters = queryParameters.set('msisdn', <any>msisdn);
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

        return this.httpClient.get<GetRegistrationStatus>(`${this.basePath}/api/registration/msisdn/check`,
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
     * Confirm msisdn verification
     * 
     * @param body Registration
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public confirmVerificationRoute(body: VerificationConfirmation, observe?: 'body', reportProgress?: boolean): Observable<GetSessionWithAccount>;
    public confirmVerificationRoute(body: VerificationConfirmation, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetSessionWithAccount>>;
    public confirmVerificationRoute(body: VerificationConfirmation, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetSessionWithAccount>>;
    public confirmVerificationRoute(body: VerificationConfirmation, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling confirmVerificationRoute.');
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

        return this.httpClient.post<GetSessionWithAccount>(`${this.basePath}/api/registration/msisdn/code`,
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
     * Request msisdn verification
     * 
     * @param body Registration
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public requestVerificationRoute(body: VerificationRequest, observe?: 'body', reportProgress?: boolean): Observable<GetRegistrationSession>;
    public requestVerificationRoute(body: VerificationRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetRegistrationSession>>;
    public requestVerificationRoute(body: VerificationRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetRegistrationSession>>;
    public requestVerificationRoute(body: VerificationRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling requestVerificationRoute.');
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

        return this.httpClient.post<GetRegistrationSession>(`${this.basePath}/api/registration/msisdn/verify`,
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
     * Verify msisdn verification
     * 
     * @param body Registration
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public verifyVerificationRoute(body: VerificationConfirmation, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public verifyVerificationRoute(body: VerificationConfirmation, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public verifyVerificationRoute(body: VerificationConfirmation, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public verifyVerificationRoute(body: VerificationConfirmation, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling verifyVerificationRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/registration/msisdn/verify/code`,
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
