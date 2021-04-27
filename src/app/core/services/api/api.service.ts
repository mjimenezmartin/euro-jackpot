import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalsService } from '../globals/globals.service';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { EnvironmentKeys } from '../../../../environments/evironment.types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient,
    private globalsService: GlobalsService,
  ) {
    this.baseUrl = this.globalsService.get(EnvironmentKeys.apiBaseUrl);
  }

  buildSearch(queryParams: any): HttpParams {
    return new HttpParams({ fromObject: queryParams });
  }

  get<T = any>(path: string, params?: HttpParams): Observable<T> {
    return this.request('get', path, undefined, params);
  }

  private request(method: string, path: string, body?: any, params?: HttpParams): Observable<any> {
    const options = this.createRequestOptions(body, params);
    return this.httpClient
      .request<any>(method, `${this.baseUrl}${path}`, options)
      .pipe(catchError(error => this.requestErrorHandler(error, body)));
  }

  private createRequestOptions(body?: any | undefined, params?: HttpParams): any {
    const options = {
      headers: new HttpHeaders(),
      params: params || null,
      body
    };
    options.headers.append('Content-Type', 'application/json');
    return options;
  }

  private requestErrorHandler(err: HttpErrorResponse, body: any): Observable<HttpErrorResponse> {
    return throwError({ ...err, body });
  }
}
