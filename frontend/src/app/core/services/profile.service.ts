import { Injectable } from '@angular/core';
import { BASE_API_URL, PROFILE_UPDATE_ROUTE } from '../types/api';
import { UserLevel } from './../../shared/types/user-level';
import { PfHttpService } from './pf-http.service';

@Injectable()
export class ProfileService {
  //insert HTTPClient via DependencyInjection in constructor
  constructor(private http: PfHttpService) {}

  /**
   * Updates the backend values by the given parameters.
   * @param familySize
   * @param level
   */
  public updateProfile(familySize: number, level: UserLevel) {
    const body = {
      level,
      family_size: familySize,
    };

    const url = `${BASE_API_URL}/${PROFILE_UPDATE_ROUTE}`;

    // send the data to the given API_URL
    this.http.post(url, body).subscribe();
  }
}
