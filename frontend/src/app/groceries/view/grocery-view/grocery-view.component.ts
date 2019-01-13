import { Component } from '@angular/core';
import { GroceryService } from 'src/app/core/services/grocery.service';
import { Grocery } from '../../types/grocery';
import { GroceryHistory } from '../../types/grocery-history';

@Component({
  selector: 'pf-grocery-view',
  templateUrl: './grocery-view.component.html',
  styleUrls: ['./grocery-view.component.scss'],
})
export class GroceryViewComponent {
  constructor(private groceryService: GroceryService) {
    this.groceryService.getGroceryOptions().subscribe((groceries: Grocery[]) => {
      groceries.map(grocery => (grocery.counter = 0));

      this.groceries = groceries;

      console.log(this.groceries);
    });
  }

  public totalWeight = 0;

  private history: GroceryHistory[] = [];

  public groceries: Grocery[] = [];

  public increase(button: Grocery) {
    button.counter++;

    this.totalWeight += button.weight;

    this.history.push({ grocery: button, action: 'increase' });
  }

  public decrease(button: Grocery) {
    if (button.counter > 0) {
      button.counter--;
      this.totalWeight -= button.weight;
    }

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

    this.totalWeight = 0;

    this.groceries.forEach(grocery => (grocery.counter = 0));
  }
}
