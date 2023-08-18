/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { CustomerToReturnDtoApiResponse } from '../models/customer-to-return-dto-api-response';
import { CustomerToReturnDtoListApiResponse } from '../models/customer-to-return-dto-list-api-response';

@Injectable({ providedIn: 'root' })
export class MainService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiMainCustomersListGet()` */
  static readonly ApiMainCustomersListGetPath = '/api/Main/customers-list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainCustomersListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMainCustomersListGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<CustomerToReturnDtoListApiResponse>> {
    const rb = new RequestBuilder(this.rootUrl, MainService.ApiMainCustomersListGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerToReturnDtoListApiResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainCustomersListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMainCustomersListGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<CustomerToReturnDtoListApiResponse> {
    return this.apiMainCustomersListGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerToReturnDtoListApiResponse>): CustomerToReturnDtoListApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainCustomersListGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMainCustomersListGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<CustomerToReturnDtoListApiResponse>> {
    const rb = new RequestBuilder(this.rootUrl, MainService.ApiMainCustomersListGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerToReturnDtoListApiResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainCustomersListGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMainCustomersListGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<CustomerToReturnDtoListApiResponse> {
    return this.apiMainCustomersListGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerToReturnDtoListApiResponse>): CustomerToReturnDtoListApiResponse => r.body)
    );
  }

  /** Path part for operation `apiMainNewCustomerPost()` */
  static readonly ApiMainNewCustomerPostPath = '/api/Main/new-customer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainNewCustomerPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMainNewCustomerPost$Plain$Response(
    params?: {
      fullname?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<CustomerToReturnDtoApiResponse>> {
    const rb = new RequestBuilder(this.rootUrl, MainService.ApiMainNewCustomerPostPath, 'post');
    if (params) {
      rb.query('fullname', params.fullname, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerToReturnDtoApiResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainNewCustomerPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMainNewCustomerPost$Plain(
    params?: {
      fullname?: string;
    },
    context?: HttpContext
  ): Observable<CustomerToReturnDtoApiResponse> {
    return this.apiMainNewCustomerPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerToReturnDtoApiResponse>): CustomerToReturnDtoApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainNewCustomerPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMainNewCustomerPost$Response(
    params?: {
      fullname?: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<CustomerToReturnDtoApiResponse>> {
    const rb = new RequestBuilder(this.rootUrl, MainService.ApiMainNewCustomerPostPath, 'post');
    if (params) {
      rb.query('fullname', params.fullname, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerToReturnDtoApiResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainNewCustomerPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMainNewCustomerPost(
    params?: {
      fullname?: string;
    },
    context?: HttpContext
  ): Observable<CustomerToReturnDtoApiResponse> {
    return this.apiMainNewCustomerPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerToReturnDtoApiResponse>): CustomerToReturnDtoApiResponse => r.body)
    );
  }

  /** Path part for operation `apiMainNextInQueuePatch()` */
  static readonly ApiMainNextInQueuePatchPath = '/api/Main/next-in-queue';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainNextInQueuePatch$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMainNextInQueuePatch$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<CustomerToReturnDtoApiResponse>> {
    const rb = new RequestBuilder(this.rootUrl, MainService.ApiMainNextInQueuePatchPath, 'patch');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerToReturnDtoApiResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainNextInQueuePatch$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMainNextInQueuePatch$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<CustomerToReturnDtoApiResponse> {
    return this.apiMainNextInQueuePatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerToReturnDtoApiResponse>): CustomerToReturnDtoApiResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMainNextInQueuePatch()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMainNextInQueuePatch$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<CustomerToReturnDtoApiResponse>> {
    const rb = new RequestBuilder(this.rootUrl, MainService.ApiMainNextInQueuePatchPath, 'patch');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerToReturnDtoApiResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMainNextInQueuePatch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMainNextInQueuePatch(
    params?: {
    },
    context?: HttpContext
  ): Observable<CustomerToReturnDtoApiResponse> {
    return this.apiMainNextInQueuePatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerToReturnDtoApiResponse>): CustomerToReturnDtoApiResponse => r.body)
    );
  }

}
