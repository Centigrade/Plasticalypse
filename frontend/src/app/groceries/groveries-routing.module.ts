import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryViewComponent } from './view/grocery-view/grocery-view.component';

const routes: Routes = [
  {
    path: 'grocery',
    component: GroceryViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceryRoutingModule {}
