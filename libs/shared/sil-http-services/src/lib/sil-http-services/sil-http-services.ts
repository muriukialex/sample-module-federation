import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class SilHttpService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    this.headers.append('Cache-control', 'no-cache');
    this.headers.append('Cache-control', 'no-store');
    this.headers.append('Expires', '0');
    this.headers.append('Pragma', 'no-cache');
  }

  public post(url: any, data: unknown): Observable<unknown> {
    console.log('environment', environment);
    console.log('url', url);
    console.log('data', data);

    return of({});
    // return this.http
    //   .post(url, data, { headers: this.headers })
    //   .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse | any) {
    return throwError(err);
  }
}
