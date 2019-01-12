import { Component } from '@angular/core';
import { DatePoint } from '../../types/datepoint';

@Component({
  selector: 'pf-evaluation-view',
  templateUrl: './evaluation-view.component.html',
  styleUrls: ['./evaluation-view.component.scss'],
})
export class EvaluationViewComponent {
  public datepoints: DatePoint[] = [
    { date: new Date(2019, 1, 12), amount: 31 },
    { date: new Date(2018, 12, 31), amount: 30 },
    { date: new Date(2018, 12, 30), amount: 50 },
    { date: new Date(2018, 11, 12), amount: 20 },
    { date: new Date(2018, 11, 1), amount: 11 },
    { date: new Date(2018, 10, 1), amount: 17 },
  ];
  public global_amount = 65;
  public monthly_amount = 70;
  public monthly_end_date: Date = new Date();
  public monthly_start_date: Date = new Date();
}
