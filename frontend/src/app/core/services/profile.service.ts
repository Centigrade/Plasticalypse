import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL, PROFILE_UPDATE_ROUTE, USERDATA_ROUTE } from '../types/api';
import { UserData } from './../../shared/types/user-data';
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

  /**
   * Gets the profile data from the backend.
   */
  public getProfileData(): Observable<UserData> {
    const url = `${BASE_API_URL}/${USERDATA_ROUTE}`;
    return this.http.get(url);
  }
}
