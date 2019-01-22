import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Grocery } from 'src/app/groceries/types/grocery';

@Injectable({
  providedIn: 'root',
})
export class GroceryServiceMock {
  public getGroceryOptions(): Observable<any> {
    return of([
      {
        id: 'bottle',
        counter: 1,
        weight: 12,
      },
      {
        id: 'cup',
        counter: 1,
        weight: 1,
      },
    ]);
  }

  public addGroceries(groceries: Grocery[]): Observable<any> {
    const addGroceries: any = { date: new Date() };
    groceries.forEach(grocery => (addGroceries[grocery.id] = grocery.counter));
    return of({ added: groceries });
  }
}
