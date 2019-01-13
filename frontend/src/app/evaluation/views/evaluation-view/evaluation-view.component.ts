import { Component } from '@angular/core';
import { EvaluationService } from 'src/app/core/services/evaluation.service';
import { DatePoint } from '../../types/datepoint';

@Component({
  selector: 'pf-evaluation-view',
  templateUrl: './evaluation-view.component.html',
  styleUrls: ['./evaluation-view.component.scss'],
})
export class EvaluationViewComponent {
  public datepoints: DatePoint[] = [];

  public percentage = 0;
  public saved = 0;

  public globalAmount = 65;
  public monthlyAmount = 70;

  public startDate: Date = new Date(2019, 0, 1);
  public endDate: Date = new Date(2019, 0, 31);

  constructor(private evaluationService: EvaluationService) {
    this.evaluationService.getEvaluation().subscribe(evaluation => (this.datepoints = evaluation));
  }
}
