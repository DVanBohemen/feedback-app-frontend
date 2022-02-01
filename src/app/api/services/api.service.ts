/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Course } from '../models/course';
import { FeedbackForm } from '../models/feedback-form';
import { Score } from '../models/score';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation rootGet
   */
  static readonly RootGetPath = '/';

  /**
   * Root.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rootGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  rootGet$Response(params?: {
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.RootGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Root.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rootGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rootGet(params?: {
  }): Observable<any> {

    return this.rootGet$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getCourseCourseGet
   */
  static readonly GetCourseCourseGetPath = '/course';

  /**
   * Get Course.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCourseCourseGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourseCourseGet$Response(params?: {
  }): Observable<StrictHttpResponse<Course>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.GetCourseCourseGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Course>;
      })
    );
  }

  /**
   * Get Course.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCourseCourseGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourseCourseGet(params?: {
  }): Observable<Course> {

    return this.getCourseCourseGet$Response(params).pipe(
      map((r: StrictHttpResponse<Course>) => r.body as Course)
    );
  }

  /**
   * Path part for operation postCourseCoursePost
   */
  static readonly PostCourseCoursePostPath = '/course';

  /**
   * Post Course.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCourseCoursePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCourseCoursePost$Response(params: {
    body: Course
  }): Observable<StrictHttpResponse<Course>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostCourseCoursePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Course>;
      })
    );
  }

  /**
   * Post Course.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postCourseCoursePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCourseCoursePost(params: {
    body: Course
  }): Observable<Course> {

    return this.postCourseCoursePost$Response(params).pipe(
      map((r: StrictHttpResponse<Course>) => r.body as Course)
    );
  }

  /**
   * Path part for operation postCourseFeedbackCourseFeedbackPost
   */
  static readonly PostCourseFeedbackCourseFeedbackPostPath = '/course/feedback';

  /**
   * Post Course Feedback.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCourseFeedbackCourseFeedbackPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCourseFeedbackCourseFeedbackPost$Response(params: {
    body: FeedbackForm
  }): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.PostCourseFeedbackCourseFeedbackPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Post Course Feedback.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postCourseFeedbackCourseFeedbackPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCourseFeedbackCourseFeedbackPost(params: {
    body: FeedbackForm
  }): Observable<any> {

    return this.postCourseFeedbackCourseFeedbackPost$Response(params).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation getCourseScoreCourseScoreGet
   */
  static readonly GetCourseScoreCourseScoreGetPath = '/course/score';

  /**
   * Get Course Score.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCourseScoreCourseScoreGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourseScoreCourseScoreGet$Response(params?: {
  }): Observable<StrictHttpResponse<Score>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.GetCourseScoreCourseScoreGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Score>;
      })
    );
  }

  /**
   * Get Course Score.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCourseScoreCourseScoreGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourseScoreCourseScoreGet(params?: {
  }): Observable<Score> {

    return this.getCourseScoreCourseScoreGet$Response(params).pipe(
      map((r: StrictHttpResponse<Score>) => r.body as Score)
    );
  }

}
