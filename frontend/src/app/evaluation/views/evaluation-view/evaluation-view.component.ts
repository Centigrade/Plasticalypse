import { Component } from '@angular/core';
import { DatePoint } from '../../types/datepoint';

@Component({
  selector: 'pf-evaluation-view',
  templateUrl: './evaluation-view.component.html',
  styleUrls: ['./evaluation-view.component.scss'],
})
export class EvaluationViewComponent {
  public datepoints: DatePoint[] = [
    { date: new Date(2019, 1, 1), amount: 31 },
    { date: new Date(2019, 1, 2), amount: 600 },
    { date: new Date(2019, 1, 3), amount: 20 },
    { date: new Date(2019, 1, 4), amount: 100 },
    { date: new Date(2019, 1, 4), amount: 100 },
    { date: new Date(2019, 1, 4), amount: 100 },
    { date: new Date(2019, 1, 4), amount: 100 },
    { date: new Date(2019, 1, 4), amount: 100 },
    { date: new Date(2019, 1, 4), amount: 100 },
    { date: new Date(2019, 1, 4), amount: 100 },
    { date: new Date(2019, 1, 5), amount: 3 },
    { date: new Date(2019, 1, 6), amount: 45 },
    { date: new Date(2019, 1, 7), amount: 664 },
    { date: new Date(2019, 1, 8), amount: 346 },
    { date: new Date(2019, 1, 9), amount: 220 },
  ];
  public globalAmount = 65;
  public monthlyAmount = 70;
  public startDate: Date = new Date(2019, 0, 1);
  public endDate: Date = new Date(2019, 0, 31);
}
