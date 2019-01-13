import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CleanessImageComponent } from './components/cleaness-image/cleaness-image.component';
import { PointGraphComponent } from './components/point-graph/point-graph.component';
import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationViewComponent } from './views/evaluation-view/evaluation-view.component';

@NgModule({
  declarations: [EvaluationViewComponent, CleanessImageComponent, PointGraphComponent],
  imports: [CommonModule, EvaluationRoutingModule],
  exports: [EvaluationViewComponent],
})
export class EvaluationModule {}
