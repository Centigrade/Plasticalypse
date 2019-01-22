import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EvaluationServiceMock {
  public getEvaluation(): Observable<any> {
    return of([
      {
        date: Date.parse('01 Jan 2019 00:00:00 GMT'),
        amount: 120,
      },
      {
        date: Date.parse('09 Jan 2019 00:00:00 GMT'),
        amount: 240,
      },
      {
        date: Date.parse('11 Jan 2019 00:00:00 GMT'),
        amount: 310,
      },
      {
        date: Date.parse('16 Jan 2019 00:00:00 GMT'),
        amount: 150,
      },
    ]);
  }
}
