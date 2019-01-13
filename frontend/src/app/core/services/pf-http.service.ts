import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const GENERAL_HTTP_OPTIONS = { withCredentials: true };

@Injectable({
  providedIn: 'root',
})
export class PfHttpService {
  constructor(private http: HttpClient) {}

  public get(url: string, options: any = {}): Observable<any> {
    options = Object.assign(options, GENERAL_HTTP_OPTIONS);

    return this.http.get(url, options);
  }

  public post(url: string, body: any, options: any = {}) {
    options = Object.assign(options, GENERAL_HTTP_OPTIONS);

    return this.http.post(url, body, options);
  }

  public patch(url: string, body: any, options: any = {}) {
    options = Object.assign(options, GENERAL_HTTP_OPTIONS);

    return this.http.patch(url, body, options);
  }
}
