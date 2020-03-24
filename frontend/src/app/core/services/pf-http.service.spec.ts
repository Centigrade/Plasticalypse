/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PfHttpService } from './pf-http.service';

describe('Service: PfHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PfHttpService],
    });
  });

  it('should ...', inject([PfHttpService], (service: PfHttpService) => {
    expect(service).toBeTruthy();
  }));
});
