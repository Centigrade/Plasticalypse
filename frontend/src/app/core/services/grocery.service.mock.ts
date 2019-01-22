import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Grocery } from 'src/app/groceries/types/grocery';

@Injectable({
  providedIn: 'root',
})
export class GroceryServiceMock {
  public getGroceryOptions(): Observable<Grocery[]> {
    return of([
      {
        id: 'bottle',
        counter: 1,
        weight: 3,
      },
      {
        id: 'cup',
        counter: 1,
        weight: 1,
      },
      {
        id: 'tetra',
        counter: 1,
        weight: 5,
      },
      {
        id: 'case',
        counter: 1,
        weight: 1,
      },
      {
        id: 'tube',
        counter: 1,
        weight: 1,
      },
      {
        id: 'wrapping',
        counter: 1,
        weight: 4,
      },
    ]);
  }

  public addGroceries(groceries: Grocery[]): Observable<Grocery[]> {
    console.log('Adding groceries:', groceries);
    return of();
  }
}
