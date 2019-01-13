import { Injectable } from '@angular/core';
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
}
