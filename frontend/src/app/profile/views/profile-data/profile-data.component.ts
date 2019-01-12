import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pf-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})
export class ProfileDataComponent implements OnInit {
  /**
   * Output for the score
   */
  @Output() editProfileExecuted = new EventEmitter<void>();

  //Properties
  public userName: string;
  public familyMemberCount: number;

  public editProfile() {
    this.editProfileExecuted.emit();
  }

  //Methods
  ngOnInit() {
    this.generateMockData();
  }

  private generateMockData() {
    this.familyMemberCount = 2;
    this.userName = 'Aline Bare';
  }
}
