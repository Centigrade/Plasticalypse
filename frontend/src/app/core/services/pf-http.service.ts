import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const GENERAL_HTTP_OPTIONS = { withCredentials: true };

@Injectable({
  providedIn: 'root',
})
export class PfHttpService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string, options: any = {}) {
    options = Object.assign(options, GENERAL_HTTP_OPTIONS);

    return this.http.get<T>(url, options);
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
