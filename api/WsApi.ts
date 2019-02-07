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

export class WsApi {
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
   * @summary WebSocket message
   */
  public registerSessionRoute(extraHttpRequestParams?: any): ng.IHttpPromise<{}> {
    const localVarPath = this.basePath + '/api/ws/register';

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
}
