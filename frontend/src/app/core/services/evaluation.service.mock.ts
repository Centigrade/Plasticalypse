import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DatePoint } from 'src/app/evaluation/types/datepoint';

@Injectable({
  providedIn: 'root',
})
export class EvaluationServiceMock {
  public getEvaluation(): Observable<DatePoint[]> {
    return of([
      {
        date: new Date(Date.parse('01 Jan 2019 00:00:00 GMT')),
        amount: 120,
      },
      {
        date: new Date(Date.parse('09 Jan 2019 00:00:00 GMT')),
        amount: 240,
      },
      {
        date: new Date(Date.parse('11 Jan 2019 00:00:00 GMT')),
        amount: 310,
      },
      {
        date: new Date(Date.parse('16 Jan 2019 00:00:00 GMT')),
        amount: 150,
      },
    ]);
  }
}
