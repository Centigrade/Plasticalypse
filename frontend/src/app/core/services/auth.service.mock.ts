import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PfHttpService } from './pf-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceMock {
  constructor(private http: PfHttpService) {}

  public login(email: string, password: string): Observable<any> {
    // get session id
    return of({ sessionId: 0 });
  }

  public register(email: string, password: string): Observable<any> {
    return of({ email });
  }
}
