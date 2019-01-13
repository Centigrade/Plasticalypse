import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { GroceryButtonComponent } from './components/grocery-button/grocery-button.component';
import { GroceryRoutingModule } from './groveries-routing.module';
import { GroceryViewComponent } from './view/grocery-view/grocery-view.component';

@NgModule({
  imports: [CommonModule, GroceryRoutingModule, SharedModule],
  declarations: [GroceryViewComponent, GroceryButtonComponent],
  exports: [GroceryViewComponent],
})
export class GroceriesModule {}
