import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pf-family-members-count',
  templateUrl: './family-members-count.component.html',
  styleUrls: ['./family-members-count.component.scss'],
})
export class FamilyMembersCountComponent implements OnInit {
  /**
   * The number of the family members.
   */
  @Input() familyMembersCount: number;

  constructor() {}

  ngOnInit() {}
}
