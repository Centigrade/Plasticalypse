import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pf-grocery-button',
  templateUrl: './grocery-button.component.html',
  styleUrls: ['./grocery-button.component.scss'],
})
export class GroceryButtonComponent {
  @Input() icon: string;
  @Input() counter: number;
  @Output() increase: EventEmitter<void> = new EventEmitter();
}
