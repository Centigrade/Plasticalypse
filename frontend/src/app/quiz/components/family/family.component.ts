import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pf-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent {
  public familyMemberCount = 1;
  /**
   * Output for the score
   */
  @Output() familyMemberCountChanged = new EventEmitter<number>();

  public decrease() {
    if (this.familyMemberCount > 1) {
      this.familyMemberCount--;
    }
  }

  public increase() {
    if (this.familyMemberCount < 12) {
      this.familyMemberCount++;
    }
  }

  public assign() {
    this.familyMemberCountChanged.emit(this.familyMemberCount);
  }
}
