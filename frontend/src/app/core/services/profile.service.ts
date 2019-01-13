import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLevel } from './../../shared/types/user-level';

const BASE_API_URL = 'http://10.8.29.15:8000';

@Injectable()
export class ProfileService {
  //insert HTTPClient via DependencyInjection in constructor
  constructor(private http: HttpClient) {}

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

    const url = `${BASE_API_URL}/user/update`;

    // send the data to the given API_URL
    this.http.post(url, body).subscribe();
  }
}
