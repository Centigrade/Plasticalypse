import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from 'src/app/groceries/types/grocery';
import { ADD_GROCERIES, BASE_API_URL, GET_GROCERY_OPTIONS } from '../types/api';
import { PfHttpService } from './pf-http.service';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  constructor(private http: PfHttpService) {}

  public getGroceryOptions(): Observable<any> {
    const url = `${BASE_API_URL}/${GET_GROCERY_OPTIONS}`;

    return this.http.get(url);
  }

  public addGroceries(groceries: Grocery[]): Observable<any> {
    const addGroceries: any = { date: new Date() };

    groceries.forEach((grocery) => (addGroceries[grocery.id] = grocery.counter));

    const url = `${BASE_API_URL}/${ADD_GROCERIES}`;

    return this.http.post(url, addGroceries);
  }
}
