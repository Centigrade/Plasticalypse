import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationViewComponent } from './views/evaluation-view/evaluation-view.component';

const routes: Routes = [
  {
    path: 'evaluation',
    component: EvaluationViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluationRoutingModule {}
