import { Component } from '@angular/core';
import { Grocery } from '../../types/grocery';
import { GroceryHistory } from '../../types/grocery-history';

@Component({
  selector: 'pf-grocery-view',
  templateUrl: './grocery-view.component.html',
  styleUrls: ['./grocery-view.component.scss'],
})
export class GroceryViewComponent {
  constructor() {}

  private history: GroceryHistory[] = [];

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

    this.history.push({ grocery: button, action: 'increase' });
  }

  public decrease(button: Grocery) {
    button.counter--;

    this.history.push({ grocery: button, action: 'decrease' });
  }

  public undo() {
    const historyEntry = this.history.pop();

    if (historyEntry !== undefined) {
      if (historyEntry.action === 'increase') {
        historyEntry.grocery.counter--;
      } else {
        historyEntry.grocery.counter++;
      }
    }
  }

  public delete() {
    this.history = [];

    this.buttons.forEach(button => (button.counter = 0));
  }
}
