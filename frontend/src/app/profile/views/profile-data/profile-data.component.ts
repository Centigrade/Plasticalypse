import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/core/services/menu.service';
import { UserLevel } from 'src/app/shared/types/user-level';
import { ProfileService } from './../../../core/services/profile.service';
import { UserData } from './../../../shared/types/user-data';

@Component({
  selector: 'pf-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})
export class ProfileDataComponent implements OnInit {
  // Properties
  public user$: Observable<UserData>;

  public editProfile() {
    this.router.navigate(['/quiz']);
    this.menuService.closeMenu();
  }

  public start() {
    this.menuService.closeMenu();
  }

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private menuService: MenuService,
  ) {}

  // Methods
  ngOnInit() {
    this.user$ = this.profileService.getProfileData();
  }

  public getUserLevelDescription(userLevel: UserLevel) {
    switch (userLevel) {
      case UserLevel.Beginner:
        // tslint:disable-next-line: max-line-length
        return 'Du hast großes Potenzial, die Welt zu verbessern. Mit jedem Joghurtbecher aus Glas mit jeder unverpackten Tomate trägst du zur Zukunft des Planeten bei. Du erzeugst etwa 2333 g Plastikverpackungsmüll pro Monat. Wir trauen dir noch viel weniger zu, total positiv gemeint.';
      case UserLevel.Moderate:
        // tslint:disable-next-line: max-line-length
        return 'Tätätääää! Du kannst stolz auf dich sein, du schreitest auf dem rechten Wege in eine erträgliche Zukunft. Kämpfe verbissen weiter und die Welt wird es dir danken. Du erzeugst etwa 3083 g Plastikverpackungsmüll pro Monat, während der Durchschnitt in Deutschland bei 3100 g liegt. Wir trauen dir noch viel weniger zu, total positiv gemeint.';
      case UserLevel.Hardliner:
        // tslint:disable-next-line: max-line-length
        return 'Halleluja! Wenn alle so wären wie du, hätte die Welt noch eine echte Chance! Du bist jetzt schon ein holdes Vorbild und man muss sich davor verneigen, dass du nicht müde wirst deinen Plastikmüll noch weiter einzuschränken. Du erzeugst etwa 2333 g Plastikverpackungsmüll pro Monat, während der Durchschnitt in Deutschland bei 3100 g liegt. Wir trauen dir noch viel weniger zu, total positiv gemeint.';
    }
  }

  public getUserLevelTitle(userLevel: UserLevel) {
    switch (userLevel) {
      case UserLevel.Beginner:
        return 'Plastikpionier';
      case UserLevel.Moderate:
        return 'Umweltheld';
      case UserLevel.Hardliner:
        return 'Weltenretter';
    }
  }
}
