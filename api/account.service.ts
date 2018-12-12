/**
 * AnyMind API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.2.6
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

import { Account } from '../model/account';
import { ChangeAccountPassword } from '../model/changeAccountPassword';
import { ChangeAccountPasswordMobile } from '../model/changeAccountPasswordMobile';
import { ConfirmMsisdnVerificationRequest } from '../model/confirmMsisdnVerificationRequest';
import { Country } from '../model/country';
import { CreateMsisdnVerificationRequest } from '../model/createMsisdnVerificationRequest';
import { GetInvoiceDetails } from '../model/getInvoiceDetails';
import { GetSessionWithAccount } from '../model/getSessionWithAccount';
import { PatchAccount } from '../model/patchAccount';
import { PostCompanyDetails } from '../model/postCompanyDetails';
import { PostNaturalPersonDetails } from '../model/postNaturalPersonDetails';
import { PutAnonymitySettings } from '../model/putAnonymitySettings';
import { PutGeneralSettings } from '../model/putGeneralSettings';
import { PutMarketingSettings } from '../model/putMarketingSettings';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AccountService {

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
     * Change account password
     * 
     * @param body Change account object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public changePasswordMobileRoute(body: ChangeAccountPasswordMobile, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public changePasswordMobileRoute(body: ChangeAccountPasswordMobile, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public changePasswordMobileRoute(body: ChangeAccountPasswordMobile, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public changePasswordMobileRoute(body: ChangeAccountPasswordMobile, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling changePasswordMobileRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/accounts/settings/mobile/change-password`,
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
     * Change account password
     * 
     * @param body Change account object
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public changePasswordRoute(body: ChangeAccountPassword, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public changePasswordRoute(body: ChangeAccountPassword, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public changePasswordRoute(body: ChangeAccountPassword, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public changePasswordRoute(body: ChangeAccountPassword, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling changePasswordRoute.');
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

        return this.httpClient.put<any>(`${this.basePath}/api/accounts/settings/change-password`,
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
     * Confirm msisdn verification
     * 
     * @param body Verification token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public confirmMsisdnVerificationRoute(body: ConfirmMsisdnVerificationRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public confirmMsisdnVerificationRoute(body: ConfirmMsisdnVerificationRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public confirmMsisdnVerificationRoute(body: ConfirmMsisdnVerificationRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public confirmMsisdnVerificationRoute(body: ConfirmMsisdnVerificationRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling confirmMsisdnVerificationRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/accounts/settings/msisdn-verification/confirm`,
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
     * Check if email is taken
     * 
     * @param email Email
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAccountEmailExistsRoute(email: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAccountEmailExistsRoute(email: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAccountEmailExistsRoute(email: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAccountEmailExistsRoute(email: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling getAccountEmailExistsRoute.');
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

        return this.httpClient.get<any>(`${this.basePath}/api/accounts/exists/email/${encodeURIComponent(String(email))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get payout invoice details
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getInvoiceDetailsRoute(observe?: 'body', reportProgress?: boolean): Observable<GetInvoiceDetails>;
    public getInvoiceDetailsRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetInvoiceDetails>>;
    public getInvoiceDetailsRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetInvoiceDetails>>;
    public getInvoiceDetailsRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<GetInvoiceDetails>(`${this.basePath}/api/accounts/invoice-details`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all supported countries
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSupportedCountriesRoute(observe?: 'body', reportProgress?: boolean): Observable<Array<Country>>;
    public getSupportedCountriesRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Country>>>;
    public getSupportedCountriesRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Country>>>;
    public getSupportedCountriesRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Country>>(`${this.basePath}/api/accounts/settings/countries`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List accounts
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listAccountsRoute(observe?: 'body', reportProgress?: boolean): Observable<Array<Account>>;
    public listAccountsRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Account>>>;
    public listAccountsRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Account>>>;
    public listAccountsRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Account>>(`${this.basePath}/api/accounts`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Request new msisdn verification
     * 
     * @param body Create new msisdn verification
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public newMsisdnVerificationRoute(body: CreateMsisdnVerificationRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public newMsisdnVerificationRoute(body: CreateMsisdnVerificationRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public newMsisdnVerificationRoute(body: CreateMsisdnVerificationRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public newMsisdnVerificationRoute(body: CreateMsisdnVerificationRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling newMsisdnVerificationRoute.');
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

        return this.httpClient.post<any>(`${this.basePath}/api/accounts/settings/msisdn-verification/create`,
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
     * Partial update account
     * 
     * @param accountId Account ID
     * @param body Account to update
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patchUpdateAccountRoute(accountId: string, body: PatchAccount, observe?: 'body', reportProgress?: boolean): Observable<Account>;
    public patchUpdateAccountRoute(accountId: string, body: PatchAccount, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Account>>;
    public patchUpdateAccountRoute(accountId: string, body: PatchAccount, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Account>>;
    public patchUpdateAccountRoute(accountId: string, body: PatchAccount, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling patchUpdateAccountRoute.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling patchUpdateAccountRoute.');
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

        return this.httpClient.patch<Account>(`${this.basePath}/api/accounts/${encodeURIComponent(String(accountId))}`,
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
     * Confirm email
     * 
     * @param token Confirmation token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postAccountVerifyEmailRoute(token: string, observe?: 'body', reportProgress?: boolean): Observable<GetSessionWithAccount>;
    public postAccountVerifyEmailRoute(token: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetSessionWithAccount>>;
    public postAccountVerifyEmailRoute(token: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetSessionWithAccount>>;
    public postAccountVerifyEmailRoute(token: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling postAccountVerifyEmailRoute.');
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

        return this.httpClient.post<GetSessionWithAccount>(`${this.basePath}/api/accounts/confirm/email/${encodeURIComponent(String(token))}`,
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
     * Post payout invoice details for company
     * 
     * @param body Invoice details for company
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postCompanyDetailsRoute(body: PostCompanyDetails, observe?: 'body', reportProgress?: boolean): Observable<GetInvoiceDetails>;
    public postCompanyDetailsRoute(body: PostCompanyDetails, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetInvoiceDetails>>;
    public postCompanyDetailsRoute(body: PostCompanyDetails, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetInvoiceDetails>>;
    public postCompanyDetailsRoute(body: PostCompanyDetails, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCompanyDetailsRoute.');
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

        return this.httpClient.post<GetInvoiceDetails>(`${this.basePath}/api/accounts/invoice-details/company`,
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
     * Confirm email
     * 
     * @param invitationToken Invitation token
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postConfirmEmailViaInvitationRoute(invitationToken: string, observe?: 'body', reportProgress?: boolean): Observable<Account>;
    public postConfirmEmailViaInvitationRoute(invitationToken: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Account>>;
    public postConfirmEmailViaInvitationRoute(invitationToken: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Account>>;
    public postConfirmEmailViaInvitationRoute(invitationToken: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (invitationToken === null || invitationToken === undefined) {
            throw new Error('Required parameter invitationToken was null or undefined when calling postConfirmEmailViaInvitationRoute.');
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

        return this.httpClient.post<Account>(`${this.basePath}/api/accounts/confirm/email/invitation/${encodeURIComponent(String(invitationToken))}`,
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
     * Post payout invoice details for natural person
     * 
     * @param body Invoice details for natural person
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postNaturalPersonDetailsRoute(body: PostNaturalPersonDetails, observe?: 'body', reportProgress?: boolean): Observable<GetInvoiceDetails>;
    public postNaturalPersonDetailsRoute(body: PostNaturalPersonDetails, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetInvoiceDetails>>;
    public postNaturalPersonDetailsRoute(body: PostNaturalPersonDetails, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetInvoiceDetails>>;
    public postNaturalPersonDetailsRoute(body: PostNaturalPersonDetails, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postNaturalPersonDetailsRoute.');
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

        return this.httpClient.post<GetInvoiceDetails>(`${this.basePath}/api/accounts/invoice-details/natural-person`,
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
     * Put anonymity settings
     * 
     * @param body Anonymity settings
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putAnonymitySettingsRoute(body: PutAnonymitySettings, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putAnonymitySettingsRoute(body: PutAnonymitySettings, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putAnonymitySettingsRoute(body: PutAnonymitySettings, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putAnonymitySettingsRoute(body: PutAnonymitySettings, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putAnonymitySettingsRoute.');
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

        return this.httpClient.put<any>(`${this.basePath}/api/accounts/settings/anonymity`,
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
     * Put general settings
     * 
     * @param body General settings
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putGeneralSettingsRoute(body: PutGeneralSettings, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putGeneralSettingsRoute(body: PutGeneralSettings, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putGeneralSettingsRoute(body: PutGeneralSettings, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putGeneralSettingsRoute(body: PutGeneralSettings, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putGeneralSettingsRoute.');
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

        return this.httpClient.put<any>(`${this.basePath}/api/accounts/settings/general`,
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
     * Put marketing settings
     * 
     * @param body Marketing settings
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public putMarketingSettingsRoute(body: PutMarketingSettings, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public putMarketingSettingsRoute(body: PutMarketingSettings, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public putMarketingSettingsRoute(body: PutMarketingSettings, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public putMarketingSettingsRoute(body: PutMarketingSettings, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling putMarketingSettingsRoute.');
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

        return this.httpClient.put<any>(`${this.basePath}/api/accounts/settings/marketing`,
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
     * Send SMS with code for password change
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sendPasswordChangeSmsRoute(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public sendPasswordChangeSmsRoute(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public sendPasswordChangeSmsRoute(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public sendPasswordChangeSmsRoute(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<any>(`${this.basePath}/api/accounts/settings/mobile/change-password/sms`,
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
