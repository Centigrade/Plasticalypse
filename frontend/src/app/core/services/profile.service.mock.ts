import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserData } from '../../shared/types/user-data';
import { UserLevel } from './../../shared/types/user-level';

@Injectable()
export class ProfileServiceMock {
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

    console.log('Update profile data on server.', body);
  }

  public getProfileData(): Observable<UserData> {
    const dummyData = {
      email: 'david.wuerfel@centigrade.de',
      family_size: 2,
      level: UserLevel.Moderate,
      savings: 42,
    };

    return of(dummyData);
  }
}
