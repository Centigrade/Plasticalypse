import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DatePoint } from 'src/app/evaluation/types/datepoint';
import { BASE_API_URL, GET_EVALUATION } from '../types/api';
import { PfHttpService } from './pf-http.service';

@Injectable({
  providedIn: 'root',
})
export class EvaluationService {
  constructor(private http: PfHttpService) {}

  public getEvaluation(): Observable<DatePoint[]> {
    const url = `${BASE_API_URL}/${GET_EVALUATION}`;

    return this.http.get(url).pipe(
      tap((datepoints) => {
        return datepoints.forEach((datepoint) => {
          datepoint.date = datepoint.date = new Date(datepoint.date);
        });
      }),
    );
  }
}
