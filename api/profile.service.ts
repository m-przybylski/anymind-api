/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.30
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

import { GetProfile } from '../model/getProfile';
import { GetProfileWithDocuments } from '../model/getProfileWithDocuments';
import { GetProfileWithServices } from '../model/getProfileWithServices';
import { GetProfileWithServicesInvitations } from '../model/getProfileWithServicesInvitations';
import { PutExpertDetails } from '../model/putExpertDetails';
import { PutOrganizationDetails } from '../model/putOrganizationDetails';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProfileService {

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
     * Remove profile from favourites
     * 
     * @param profileId profileId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteProfileFavouriteExpertRoute(profileId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteProfileFavouriteExpertRoute(profileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteProfileFavouriteExpertRoute(profileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteProfileFavouriteExpertRoute(profileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling deleteProfileFavouriteExpertRoute.');
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

        return this.httpClient.delete<any>(`${this.basePath}/api/profiles/${encodeURIComponent(String(profileId))}/favourite/expert`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Remove profile from favourites
     * 
     * @param profileId profileId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteProfileFavouriteOrganizationRoute(profileId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteProfileFavouriteOrganizationRoute(profileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteProfileFavouriteOrganizationRoute(profileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteProfileFavouriteOrganizationRoute(profileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling deleteProfileFavouriteOrganizationRoute.');
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

        return this.httpClient.delete<any>(`${this.basePath}/api/profiles/${encodeURIComponent(String(profileId))}/favourite/organization`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get user employers profiles with services
     * 
     * @param profileId profileId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getEmployersProfilesWithServicesRoute(profileId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<GetProfileWithServices>>;
    public getEmployersProfilesWithServicesRoute(profileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetProfileWithServices>>>;
    public getEmployersProfilesWithServicesRoute(profileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetProfileWithServices>>>;
    public getEmployersProfilesWithServicesRoute(profileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling getEmployersProfilesWithServicesRoute.');
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

        return this.httpClient.get<Array<GetProfileWithServices>>(`${this.basePath}/api/profiles/${encodeURIComponent(String(profileId))}/employers/services`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Details of profile
     * 
     * @param profileId profileId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProfileRoute(profileId: string, observe?: 'body', reportProgress?: boolean): Observable<GetProfileWithDocuments>;
    public getProfileRoute(profileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetProfileWithDocuments>>;
    public getProfileRoute(profileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetProfileWithDocuments>>;
    public getProfileRoute(profileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling getProfileRoute.');
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

        return this.httpClient.get<GetProfileWithDocuments>(`${this.basePath}/api/profiles/${encodeURIComponent(String(profileId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Details of profile with services
     * 
     * @param profileId profileId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProfileWithServicesRoute(profileId: string, observe?: 'body', reportProgress?: boolean): Observable<GetProfileWithServices>;
    public getProfileWithServicesRoute(profileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetProfileWithServices>>;
    public getProfileWithServicesRoute(profileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetProfileWithServices>>;
    public getProfileWithServicesRoute(profileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling getProfileWithServicesRoute.');
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

        return this.httpClient.get<GetProfileWithServices>(`${this.basePath}/api/profiles/${encodeURIComponent(String(profileId))}/services`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all profile invitations
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProfilesInvitationsRoute(observe?: 'body', reportProgress?: boolean): Observable<Array<GetProfileWithServicesInvitations>>;
    public getProfilesInvitationsRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<GetProfileWithServicesInvitations>>>;
    public getProfilesInvitationsRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<GetProfileWithServicesInvitations>>>;
    public getProfilesInvitationsRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<GetProfileWithServicesInvitations>>(`${this.basePath}/api/profiles/invitations`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Add profile to favourites
     * 
     * @param profileId profileId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postProfileFavouriteExpertRoute(profileId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postProfileFavouriteExpertRoute(profileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postProfileFavouriteExpertRoute(profileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postProfileFavouriteExpertRoute(profileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling postProfileFavouriteExpertRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/profiles/${encodeURIComponent(String(profileId))}/favourite/expert`,
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
     * Add profile to favourites
     * 
     * @param profileId profileId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postProfileFavouriteOrganizationRoute(profileId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public postProfileFavouriteOrganizationRoute(profileId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public postProfileFavouriteOrganizationRoute(profileId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public postProfileFavouriteOrganizationRoute(profileId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (profileId === null || profileId === undefined) {
            throw new Error('Required parameter profileId was null or undefined when calling postProfileFavouriteOrganizationRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/profiles/${encodeURIComponent(String(profileId))}/favourite/organization`,
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
     * Create or update expert
     * 
     * @param body Expert details
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putExpertProfileRoute(body: PutExpertDetails, observe?: 'body', reportProgress?: boolean): Observable<GetProfile>;
    public putExpertProfileRoute(body: PutExpertDetails, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetProfile>>;
    public putExpertProfileRoute(body: PutExpertDetails, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetProfile>>;
    public putExpertProfileRoute(body: PutExpertDetails, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putExpertProfileRoute.');
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

        return this.httpClient.put<GetProfile>(`${this.basePath}/api/profiles/expert`,
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
     * Create or update organization
     * 
     * @param body Organization details
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putOrganizationProfileRoute(body: PutOrganizationDetails, observe?: 'body', reportProgress?: boolean): Observable<GetProfile>;
    public putOrganizationProfileRoute(body: PutOrganizationDetails, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetProfile>>;
    public putOrganizationProfileRoute(body: PutOrganizationDetails, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetProfile>>;
    public putOrganizationProfileRoute(body: PutOrganizationDetails, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putOrganizationProfileRoute.');
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

        return this.httpClient.put<GetProfile>(`${this.basePath}/api/profiles/organization`,
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
