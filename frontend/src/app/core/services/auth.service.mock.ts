import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceMock {
  public login(email: string, password: string): Observable<any> {
    // get session id
    return of({ sessionId: 0 });
  }

  public register(email: string, password: string): Observable<any> {
    return of({ email });
  }
}
