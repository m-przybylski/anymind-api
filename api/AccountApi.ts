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
import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class AccountApi {
  protected basePath = 'https://localhost';
  public defaultHeaders: any = {};

  static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

  constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
    if (basePath !== undefined) {
      this.basePath = basePath;
    }
  }

  /**
   *
   * @summary Change account password
   * @param body Change account object
   */
  public changePasswordMobileRoute(
    body: models.ChangeAccountPasswordMobile,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<{}> {
    const localVarPath = this.basePath + '/api/accounts/settings/mobile/change-password';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling changePasswordMobileRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'POST',
      url: localVarPath,
      data: body,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Change account password
   * @param body Change account object
   */
  public changePasswordRoute(body: models.ChangeAccountPassword, extraHttpRequestParams?: any): ng.IHttpPromise<{}> {
    const localVarPath = this.basePath + '/api/accounts/settings/change-password';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling changePasswordRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'PUT',
      url: localVarPath,
      data: body,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Confirm msisdn verification
   * @param body Verification token
   */
  public confirmMsisdnVerificationRoute(
    body: models.ConfirmMsisdnVerificationRequest,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<{}> {
    const localVarPath = this.basePath + '/api/accounts/settings/msisdn-verification/confirm';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling confirmMsisdnVerificationRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'POST',
      url: localVarPath,
      data: body,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Check if email is taken
   * @param email Email
   */
  public getAccountEmailExistsRoute(email: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}> {
    const localVarPath =
      this.basePath + '/api/accounts/exists/email/{email}'.replace('{' + 'email' + '}', String(email));

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'email' is not null or undefined
    if (email === null || email === undefined) {
      throw new Error('Required parameter email was null or undefined when calling getAccountEmailExistsRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'GET',
      url: localVarPath,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Get call invoice details
   */
  public getCallInvoiceDetailsRoute(extraHttpRequestParams?: any): ng.IHttpPromise<models.GetCallInvoiceDetails> {
    const localVarPath = this.basePath + '/api/accounts/settings/invoice-details/call';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let httpRequestParams: ng.IRequestConfig = {
      method: 'GET',
      url: localVarPath,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Get payout invoice details for company
   */
  public getCompanyPayoutInvoiceDetailsRoute(
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.GetCompanyInvoiceDetails> {
    const localVarPath = this.basePath + '/api/accounts/settings/invoice-details/company';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let httpRequestParams: ng.IRequestConfig = {
      method: 'GET',
      url: localVarPath,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Get mobile protected views
   */
  public getMobileProtectedViewsRoute(extraHttpRequestParams?: any): ng.IHttpPromise<models.GetMobileProtectedViews> {
    const localVarPath = this.basePath + '/api/accounts/mobile-permissions/protected-views';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let httpRequestParams: ng.IRequestConfig = {
      method: 'GET',
      url: localVarPath,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Get payout invoice details for person
   */
  public getPersonalPayoutInvoiceDetailsRoute(
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.GetPersonalInvoiceDetails> {
    const localVarPath = this.basePath + '/api/accounts/settings/invoice-details/personal';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let httpRequestParams: ng.IRequestConfig = {
      method: 'GET',
      url: localVarPath,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Get all supported countries
   */
  public getSupportedCountriesRoute(extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.Country>> {
    const localVarPath = this.basePath + '/api/accounts/settings/countries';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let httpRequestParams: ng.IRequestConfig = {
      method: 'GET',
      url: localVarPath,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary List accounts
   */
  public listAccountsRoute(extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.Account>> {
    const localVarPath = this.basePath + '/api/accounts';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let httpRequestParams: ng.IRequestConfig = {
      method: 'GET',
      url: localVarPath,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Request new msisdn verification
   * @param body Create new msisdn verification
   */
  public newMsisdnVerificationRoute(
    body: models.CreateMsisdnVerificationRequest,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<{}> {
    const localVarPath = this.basePath + '/api/accounts/settings/msisdn-verification/create';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newMsisdnVerificationRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'POST',
      url: localVarPath,
      data: body,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Patch mobile pin with protected views
   * @param body PatchMobileViewsPermissions
   */
  public patchMobileViewsPermissionsRoute(
    body: models.PatchMobileViewsPermissions,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.Account> {
    const localVarPath = this.basePath + '/api/accounts/mobile-permissions';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling patchMobileViewsPermissionsRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'PATCH',
      url: localVarPath,
      data: body,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Partial update account
   * @param accountId Account ID
   * @param body Account to update
   */
  public patchUpdateAccountRoute(
    accountId: string,
    body: models.PatchAccount,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.Account> {
    const localVarPath =
      this.basePath + '/api/accounts/{accountId}'.replace('{' + 'accountId' + '}', String(accountId));

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new Error('Required parameter accountId was null or undefined when calling patchUpdateAccountRoute.');
    }
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling patchUpdateAccountRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'PATCH',
      url: localVarPath,
      data: body,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Confirm email
   * @param token Confirmation token
   */
  public postAccountVerifyEmailRoute(token: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.GetSession> {
    const localVarPath =
      this.basePath + '/api/accounts/confirm/email/{token}'.replace('{' + 'token' + '}', String(token));

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'token' is not null or undefined
    if (token === null || token === undefined) {
      throw new Error('Required parameter token was null or undefined when calling postAccountVerifyEmailRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'POST',
      url: localVarPath,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Post call invoice details
   * @param body Create company info
   */
  public postCallInvoiceDetailsRoute(
    body: models.PostCallInvoiceDetails,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.GetCallInvoiceDetails> {
    const localVarPath = this.basePath + '/api/accounts/settings/invoice-details/call';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling postCallInvoiceDetailsRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'POST',
      url: localVarPath,
      data: body,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Post payout invoice details for company
   * @param body Create company info
   */
  public postCompanyPayoutInvoiceDetailsRoute(
    body: models.PostCompanyInvoiceDetails,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.GetCompanyInvoiceDetails> {
    const localVarPath = this.basePath + '/api/accounts/settings/invoice-details/company';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error(
        'Required parameter body was null or undefined when calling postCompanyPayoutInvoiceDetailsRoute.',
      );
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'POST',
      url: localVarPath,
      data: body,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Confirm email
   * @param invitationToken Invitation token
   */
  public postConfirmEmailViaInvitationRoute(
    invitationToken: string,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.Account> {
    const localVarPath =
      this.basePath +
      '/api/accounts/confirm/email/invitation/{invitationToken}'.replace(
        '{' + 'invitationToken' + '}',
        String(invitationToken),
      );

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'invitationToken' is not null or undefined
    if (invitationToken === null || invitationToken === undefined) {
      throw new Error(
        'Required parameter invitationToken was null or undefined when calling postConfirmEmailViaInvitationRoute.',
      );
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'POST',
      url: localVarPath,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Post mobile pin with protected views
   * @param body PostMobileViewsPermissions
   */
  public postMobilePinRoute(
    body: models.PostMobileViewsPermissions,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.Account> {
    const localVarPath = this.basePath + '/api/accounts/mobile-permissions';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling postMobilePinRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'POST',
      url: localVarPath,
      data: body,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Post payout invoice details for person
   * @param body Create client invoice details
   */
  public postPersonalPayoutInvoiceDetailsRoute(
    body: models.PostPersonalInvoiceDetails,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.GetPersonalInvoiceDetails> {
    const localVarPath = this.basePath + '/api/accounts/settings/invoice-details/personal';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error(
        'Required parameter body was null or undefined when calling postPersonalPayoutInvoiceDetailsRoute.',
      );
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'POST',
      url: localVarPath,
      data: body,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Update account
   * @param accountId Account ID
   * @param body Account to update
   */
  public putAccountRoute(
    accountId: string,
    body: models.PutAccount,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.Account> {
    const localVarPath =
      this.basePath + '/api/accounts/{accountId}'.replace('{' + 'accountId' + '}', String(accountId));

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'accountId' is not null or undefined
    if (accountId === null || accountId === undefined) {
      throw new Error('Required parameter accountId was null or undefined when calling putAccountRoute.');
    }
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling putAccountRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'PUT',
      url: localVarPath,
      data: body,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Put general settings
   * @param body General settings
   */
  public putGeneralSettingsRoute(body: models.PutGeneralSettings, extraHttpRequestParams?: any): ng.IHttpPromise<{}> {
    const localVarPath = this.basePath + '/api/accounts/settings/general';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling putGeneralSettingsRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'PUT',
      url: localVarPath,
      data: body,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Send SMS with code for password change
   */
  public sendPasswordChangeSmsRoute(extraHttpRequestParams?: any): ng.IHttpPromise<{}> {
    const localVarPath = this.basePath + '/api/accounts/settings/mobile/change-password/sms';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    let httpRequestParams: ng.IRequestConfig = {
      method: 'POST',
      url: localVarPath,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
  /**
   *
   * @summary Validate mobile pin
   * @param pin mobile pin
   */
  public validateMobilePinRoute(pin: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}> {
    const localVarPath =
      this.basePath + '/api/accounts/mobile-permissions/{pin}'.replace('{' + 'pin' + '}', String(pin));

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'pin' is not null or undefined
    if (pin === null || pin === undefined) {
      throw new Error('Required parameter pin was null or undefined when calling validateMobilePinRoute.');
    }
    let httpRequestParams: ng.IRequestConfig = {
      method: 'GET',
      url: localVarPath,
      params: queryParameters,
      headers: headerParams,
    };

    if (extraHttpRequestParams) {
      httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
    }

    return this.$http(httpRequestParams);
  }
}
