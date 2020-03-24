import { Component, Input } from '@angular/core';

@Component({
  selector: 'pf-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss'],
})
export class SavingsComponent {
  // Property
  public title: string;

  @Input() savingAmount: number;
}
