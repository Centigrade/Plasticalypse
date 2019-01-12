import { Grocery } from './grocery';

export interface GroceryHistory {
  grocery: Grocery;
  action: 'increase' | 'decrease';
}
