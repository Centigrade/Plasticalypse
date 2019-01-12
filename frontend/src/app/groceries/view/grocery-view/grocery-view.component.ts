import { Component } from '@angular/core';
import { Grocery } from '../../types/grocery';

@Component({
  selector: 'pf-grocery-view',
  templateUrl: './grocery-view.component.html',
  styleUrls: ['./grocery-view.component.scss'],
})
export class GroceryViewComponent {
  constructor() {}

  private history: Grocery[] = [];

  public buttons: Grocery[] = [
    {
      id: 'tetrapak',
      icon: 'search',
      counter: 0,
    },
    {
      id: 'tetrapak',
      icon: 'search',
      counter: 0,
    },
  ];

  public increase(button: Grocery) {
    button.counter++;

    this.history.push(button);
  }

  public undo() {
    const button = this.history.pop();

    if (button !== undefined) {
      button.counter--;
    }
  }

  public delete() {
    this.history = [];

    this.buttons.forEach(button => (button.counter = 0));
  }
}
