import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationViewComponent } from './views/evaluation-view/evaluation-view.component';

@NgModule({
  declarations: [EvaluationViewComponent],
  imports: [CommonModule, EvaluationRoutingModule],
  exports: [EvaluationViewComponent],
})
export class EvaluationModule {}
