import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pf-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})
export class ProfileDataComponent implements OnInit {
  //Properties
  public userName: string;
  public familyMemberCount: number;
  public userLevel: string;
  public userLevelDescription: string;
  public savingAmount: number;

  public editProfile() {
    //TODO Implement routing to quiz
  }

  //Methods
  ngOnInit() {
    this.generateMockData();
  }

  private generateMockData() {
    this.familyMemberCount = 2;
    this.userName = 'Aline Bare';
    this.userLevel = 'Weltenretter';
    this.userLevelDescription =
      'Halleluja! Wenn alle so wären wie du, hätte die Welt noch eine echte Chance! Du bist jetzt schon ein holdes Vorbild und man muss sich davor verneigen, dass du nicht müde wirst deinen Plastikmüll noch weiter einzuschränken. Du erzeugst etwa X kg Plastikverpackungsmüll pro Monat, während der Durchschnitt in Deutschland bei X kg liegt. Wir trauen dir noch viel weniger zu, total positiv gemeint.';
    this.savingAmount = 65.2;
  }
}
