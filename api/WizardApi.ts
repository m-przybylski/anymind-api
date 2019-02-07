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

export class WizardApi {
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
   * @summary Get details of profile
   */
  public getWizardProfileRoute(extraHttpRequestParams?: any): ng.IHttpPromise<models.GetWizardProfile> {
    const localVarPath = this.basePath + '/api/wizard/profile';

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
   * @summary Complete the wizard
   */
  public postWizardCompleteRoute(extraHttpRequestParams?: any): ng.IHttpPromise<models.WizardCompleteResult> {
    const localVarPath = this.basePath + '/api/wizard/complete';

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
   * @summary Create or update partial wizard profile
   * @param body Updated profile
   */
  public putWizardProfileRoute(
    body: models.PutWizardProfile,
    extraHttpRequestParams?: any,
  ): ng.IHttpPromise<models.GetWizardProfile> {
    const localVarPath = this.basePath + '/api/wizard/profile';

    let queryParameters: any = {};
    let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling putWizardProfileRoute.');
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
}
