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

export class RatelApi {
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
   * @summary Get config for ratel authentication
   */
  public getRatelAuthConfigRoute(extraHttpRequestParams?: any): ng.IHttpPromise<models.SignedAgent> {
    const localVarPath = this.basePath + '/api/ratel/config';

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
   * @summary Store briefcase user id for ratel authentication
   * @param body body
   */
  public postBriefcaseUserConfigRoute(
    body: models.PostBriefcaseUserConfig,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<{}> {
    const localVarPath = this.basePath + '/api/ratel/config/user';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling postBriefcaseUserConfigRoute.');
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
   * @summary Create call
   * @param body body
   * @param xDeviceId deviceId
   */
  public postCreateCallRoute(
    body: models.CreateCallHook,
    xDeviceId: string,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.GetSUERatelCall> {
    const localVarPath = this.basePath + '/api/ratel/call/create';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling postCreateCallRoute.');
    }
    // verify required parameter 'xDeviceId' is not null or undefined
    if (xDeviceId === null || xDeviceId === undefined) {
      throw new Error('Required parameter xDeviceId was null or undefined when calling postCreateCallRoute.');
    }
    headerParams['X-Device-Id'] = xDeviceId;

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
   * @summary Close messenger room
   * @param sueId ServiceUsageEventId
   */
  public postRatelCloseRoomRoute(sueId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}> {
    const localVarPath =
      this.basePath + '/api/ratel/call/{sueId}/room/close'.replace('{' + 'sueId' + '}', String(sueId));

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'sueId' is not null or undefined
    if (sueId === null || sueId === undefined) {
      throw new Error('Required parameter sueId was null or undefined when calling postRatelCloseRoomRoute.');
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
   * @summary Create messenger room
   * @param sueId ServiceUsageEventId
   */
  public postRatelCreateRoomRoute(
    sueId: string,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.RatelRoomDetails> {
    const localVarPath =
      this.basePath + '/api/ratel/call/{sueId}/room/create'.replace('{' + 'sueId' + '}', String(sueId));

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'sueId' is not null or undefined
    if (sueId === null || sueId === undefined) {
      throw new Error('Required parameter sueId was null or undefined when calling postRatelCreateRoomRoute.');
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
   * @summary Hook on call stop
   * @param sueId ServiceUsageEventId
   */
  public postRatelStopCallRoute(sueId: string, extraHttpRequestParams?: any): ng.IHttpPromise<models.RatelCallDetails> {
    const localVarPath = this.basePath + '/api/ratel/call/{sueId}/stop'.replace('{' + 'sueId' + '}', String(sueId));

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'sueId' is not null or undefined
    if (sueId === null || sueId === undefined) {
      throw new Error('Required parameter sueId was null or undefined when calling postRatelStopCallRoute.');
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
   * @summary Mark session as registered on push notifications
   */
  public postRegisteredOnPushNotificationRoute(extraHttpRequestParams?: any): ng.IHttpPromise<{}> {
    const localVarPath = this.basePath + '/api/ratel/config/push-notification';

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
   * @summary Start call
   * @param sueId ServiceUsageEventId
   * @param xDeviceId deviceId
   */
  public postStartCallRoute(sueId: string, xDeviceId: string, extraHttpRequestParams?: any): ng.IHttpPromise<{}> {
    const localVarPath = this.basePath + '/api/ratel/call/{sueId}/start'.replace('{' + 'sueId' + '}', String(sueId));

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'sueId' is not null or undefined
    if (sueId === null || sueId === undefined) {
      throw new Error('Required parameter sueId was null or undefined when calling postStartCallRoute.');
    }
    // verify required parameter 'xDeviceId' is not null or undefined
    if (xDeviceId === null || xDeviceId === undefined) {
      throw new Error('Required parameter xDeviceId was null or undefined when calling postStartCallRoute.');
    }
    headerParams['X-Device-Id'] = xDeviceId;

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
}