import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";
import {NotFoundError} from "../models/not-found-error.model";
import {catchError} from "rxjs/operators";
import {AppError} from "../models/error.model";
import {AccessControlAllowMissingError} from "../models/access-control-allow-missing-error.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _headers: HttpHeaders;

  constructor(private _http: HttpClient) {
    this._http = _http;
    this._headers = new HttpHeaders();
    this._headers.set('content-type', 'plan/text');
    this._headers.set('Access-Control-Allow-Origin', '*');
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }

  post<Object>(resource: Object, url: string) {
    return this._http.post<Object>(url, resource)
    .pipe(catchError( err => {
      return DataService.handleError(err);
    }))
  }

  get<Object>(url: string) {
    return this._http.get<Object>(url, {'headers': this._headers})
    .pipe(catchError( err => {
      return DataService.handleError(err);
    }))
  }

  patch(resource: Object, url: string) {
    return this._http.patch(url, resource)
    .pipe(catchError( err => {
      return DataService.handleError(err);
    }))
  }

  put(resource: Object, url: string) {
    return this._http.put(url, resource)
    .pipe(catchError( err => {
      return DataService.handleError(err);
    }))
  }

  delete(resource: Object, url: string) {
    return this._http.delete(url, resource)
    .pipe(catchError( err => {
      return DataService.handleError(err);
    }))
  }

  protected static handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError())
    } else {
      return throwError(new AppError("App data error raised"))
    }
  }
}
