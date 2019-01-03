/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.21
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

import { GetSearchRequestResult } from '../model/getSearchRequestResult';
import { GetSuggestedQueries } from '../model/getSuggestedQueries';
import { GetSuggestedTags } from '../model/getSuggestedTags';
import { PostRetrainSearchEngine } from '../model/postRetrainSearchEngine';
import { PostSearchRequest } from '../model/postSearchRequest';
import { PostSuggestQueries } from '../model/postSuggestQueries';
import { PostSuggestTags } from '../model/postSuggestTags';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SearchService {

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
     * Get query suggestions
     * 
     * @param body body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postQueriesSuggestionsRoute(body?: PostSuggestQueries, observe?: 'body', reportProgress?: boolean): Observable<GetSuggestedQueries>;
    public postQueriesSuggestionsRoute(body?: PostSuggestQueries, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetSuggestedQueries>>;
    public postQueriesSuggestionsRoute(body?: PostSuggestQueries, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetSuggestedQueries>>;
    public postQueriesSuggestionsRoute(body?: PostSuggestQueries, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<GetSuggestedQueries>(`${this.basePath}/api/search/query/suggestions`,
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
     * Resend data to search
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postSearchResendDataRoute(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postSearchResendDataRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postSearchResendDataRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postSearchResendDataRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}/api/search/resend-data`,
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
     * Retrain search model
     * 
     * @param body body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postSearchRetrainRoute(body?: PostRetrainSearchEngine, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postSearchRetrainRoute(body?: PostRetrainSearchEngine, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postSearchRetrainRoute(body?: PostRetrainSearchEngine, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postSearchRetrainRoute(body?: PostRetrainSearchEngine, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}/api/search/retrain`,
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
     * Search with query
     * 
     * @param query query parameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postSearchRoute(query?: PostSearchRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<GetSearchRequestResult>>;
    public postSearchRoute(query?: PostSearchRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetSearchRequestResult>>>;
    public postSearchRoute(query?: PostSearchRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetSearchRequestResult>>>;
    public postSearchRoute(query?: PostSearchRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<Array<GetSearchRequestResult>>(`${this.basePath}/api/search`,
            query,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get tags suggestions
     * 
     * @param body body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postTagsSuggestionsRoute(body?: PostSuggestTags, observe?: 'body', reportProgress?: boolean): Observable<GetSuggestedTags>;
    public postTagsSuggestionsRoute(body?: PostSuggestTags, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetSuggestedTags>>;
    public postTagsSuggestionsRoute(body?: PostSuggestTags, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetSuggestedTags>>;
    public postTagsSuggestionsRoute(body?: PostSuggestTags, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<GetSuggestedTags>(`${this.basePath}/api/search/tags/suggestions`,
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
