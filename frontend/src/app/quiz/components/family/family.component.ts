import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pf-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent {
  /**
   * Output for the score
   */
  @Output() familyMemberCountChanged = new EventEmitter<number>();

  public personCountChanged(count: number) {
    this.familyMemberCountChanged.emit(count);
  }
}
