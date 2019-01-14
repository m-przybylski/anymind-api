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

import { GetInvoice } from '../model/getInvoice';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class InvoicesService {

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
     * Get invoice
     * 
     * @param invoiceId invoiceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInvoiceRoute(invoiceId: string, observe?: 'body', reportProgress?: boolean): Observable<GetInvoice>;
    public getInvoiceRoute(invoiceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetInvoice>>;
    public getInvoiceRoute(invoiceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetInvoice>>;
    public getInvoiceRoute(invoiceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (invoiceId === null || invoiceId === undefined) {
            throw new Error('Required parameter invoiceId was null or undefined when calling getInvoiceRoute.');
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

        return this.httpClient.get<GetInvoice>(`${this.basePath}/api/invoices/${encodeURIComponent(String(invoiceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Accept partner invoice
     * 
     * @param invoiceId invoiceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postAcceptInvoiceRoute(invoiceId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postAcceptInvoiceRoute(invoiceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postAcceptInvoiceRoute(invoiceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postAcceptInvoiceRoute(invoiceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (invoiceId === null || invoiceId === undefined) {
            throw new Error('Required parameter invoiceId was null or undefined when calling postAcceptInvoiceRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/invoices/${encodeURIComponent(String(invoiceId))}/accept`,
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
     * Reject partner invoice
     * 
     * @param invoiceId invoiceId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postRejectInvoiceRoute(invoiceId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postRejectInvoiceRoute(invoiceId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postRejectInvoiceRoute(invoiceId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postRejectInvoiceRoute(invoiceId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (invoiceId === null || invoiceId === undefined) {
            throw new Error('Required parameter invoiceId was null or undefined when calling postRejectInvoiceRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/invoices/${encodeURIComponent(String(invoiceId))}/reject`,
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
