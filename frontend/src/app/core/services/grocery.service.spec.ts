/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GroceryService } from './grocery.service';

describe('Service: Grocery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroceryService]
    });
  });

  it('should ...', inject([GroceryService], (service: GroceryService) => {
    expect(service).toBeTruthy();
  }));
});
