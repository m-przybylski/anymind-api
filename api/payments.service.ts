/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.1
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

import { GetCreditCard } from '../model/getCreditCard';
import { GetDefaultPaymentMethod } from '../model/getDefaultPaymentMethod';
import { PostAddNewCard } from '../model/postAddNewCard';
import { PutDefaultPaymentMethod } from '../model/putDefaultPaymentMethod';
import { ThreeDSecureUrl } from '../model/threeDSecureUrl';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PaymentsService {

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
     * Delete credit card
     * 
     * @param creditCardId creditCardId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCreditCardRoute(creditCardId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteCreditCardRoute(creditCardId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteCreditCardRoute(creditCardId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteCreditCardRoute(creditCardId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (creditCardId === null || creditCardId === undefined) {
            throw new Error('Required parameter creditCardId was null or undefined when calling deleteCreditCardRoute.');
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

        return this.httpClient.delete<any>(`${this.basePath}/api/payments/tpay/credit-card/${encodeURIComponent(String(creditCardId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get credit cards
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCreditCardsRoute(observe?: 'body', reportProgress?: boolean): Observable<Array<GetCreditCard>>;
    public getCreditCardsRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetCreditCard>>>;
    public getCreditCardsRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetCreditCard>>>;
    public getCreditCardsRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<GetCreditCard>>(`${this.basePath}/api/payments/tpay/credit-cards`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get default payment method
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDefaultPaymentMethodRoute(observe?: 'body', reportProgress?: boolean): Observable<GetDefaultPaymentMethod>;
    public getDefaultPaymentMethodRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetDefaultPaymentMethod>>;
    public getDefaultPaymentMethodRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetDefaultPaymentMethod>>;
    public getDefaultPaymentMethodRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<GetDefaultPaymentMethod>(`${this.basePath}/api/payments/default-payment-method`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Add new credit card
     * 
     * @param body New card&#39;s data
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCreditCardRoute(body: PostAddNewCard, observe?: 'body', reportProgress?: boolean): Observable<ThreeDSecureUrl>;
    public postCreditCardRoute(body: PostAddNewCard, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ThreeDSecureUrl>>;
    public postCreditCardRoute(body: PostAddNewCard, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ThreeDSecureUrl>>;
    public postCreditCardRoute(body: PostAddNewCard, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCreditCardRoute.');
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

        return this.httpClient.post<ThreeDSecureUrl>(`${this.basePath}/api/payments/tpay/credit-card`,
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
     * Change default payment method
     * 
     * @param body ChangeDefaultPaymentMethod
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putDefaultPaymentMethodRoute(body?: PutDefaultPaymentMethod, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putDefaultPaymentMethodRoute(body?: PutDefaultPaymentMethod, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putDefaultPaymentMethodRoute(body?: PutDefaultPaymentMethod, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putDefaultPaymentMethodRoute(body?: PutDefaultPaymentMethod, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.put<any>(`${this.basePath}/api/payments/default-payment-method`,
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
