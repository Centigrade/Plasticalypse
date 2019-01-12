import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pf-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})
export class ProfileDataComponent implements OnInit {
  public userName: string;
  public familyMemberCount: number;

  constructor() {}

  ngOnInit() {
    this.generateMockData();
  }

  private generateMockData() {
    this.familyMemberCount = 2;
    this.userName = 'Aline Bare';
  }
}
