import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // assign API Base Url
  apiBaseUrl = environment.API_BASE_URL;
  constructor(private http: HttpClient) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}${path}`, { params }).pipe(catchError(this.handleError));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}${path}`, JSON.stringify(body)).pipe(catchError(this.handleError));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}${path}`, JSON.stringify(body)).pipe(catchError(this.handleError));
  }

  delete(path): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}${path}`).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
