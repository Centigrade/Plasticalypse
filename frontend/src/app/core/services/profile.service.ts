import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLevel } from './../../shared/types/user-level';

const API_URL = 'http://10.8.29.15';

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
      famiily_size: familySize,
    };

    // send the data to the given API_URL
    this.http.post(API_URL, body);
  }
}
