import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePoint } from '../../types/datepoint';

const TRIGGER_ON_DELTA = 50;

@Component({
  selector: 'pf-point-graph',
  templateUrl: './point-graph.component.html',
  styleUrls: ['./point-graph.component.scss'],
})
export class PointGraphComponent implements OnChanges {
  @Input() datepoints: DatePoint[] = [];
  @Input() startDate: Date;
  @Input() endDate: Date;
  @Output() startDateChange: EventEmitter<Date> = new EventEmitter();
  @Output() endDateChange: EventEmitter<Date> = new EventEmitter();

  public minAmount: number = 30;
  public maxAmount: number = 500;
  public viewHeight: number = 100;

  public shownDatePoints: DatePoint[] = [];

  public pan = false;
  public triggeredPan = 0;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.fitlerDatePoints();
    }
  }

  private fitlerDatePoints() {
    this.shownDatePoints = this.datepoints.filter(datePoint => {
      return datePoint.date >= this.startDate && datePoint.date <= this.endDate;
    });
  }

  public caluclateLeft(index: number) {
    const numberOfEntries = this.shownDatePoints.length;
    const style = `calc(${index} * 100% / ${numberOfEntries} + 25px)`;

    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  public calculateHeight(amount: number) {
    const calculatedAmount = Math.max(Math.min(amount, this.maxAmount), this.minAmount);

    const style = `calc(${calculatedAmount} / ${this.maxAmount} * ${this.viewHeight}px)`;

    return this.sanitizer.bypassSecurityTrustStyle(style);
  }

  public lineWidth() {
    return this.shownDatePoints.length >= 15 ? '4px' : '10px';
  }

  public showLabel() {
    return this.shownDatePoints.length >= 15 ? false : true;
  }

  public onPanMove(event) {
    const checkDelta = event.deltaX - this.triggeredPan;

    if (checkDelta > TRIGGER_ON_DELTA) {
      this.triggeredPan = event.deltaX;

      this.modifyDateByDays(-1);
    }

    if (checkDelta < -TRIGGER_ON_DELTA) {
      this.triggeredPan = event.deltaX;

      this.modifyDateByDays(1);
    }
  }

  public onPanStart() {
    this.pan = true;
    this.triggeredPan = 0;
  }

  public onPanEnd() {
    this.pan = false;
  }

  private modifyDateByDays(days: number) {
    this.startDate.setDate(this.startDate.getDate() + days);
    this.endDate.setDate(this.endDate.getDate() + days);

    this.startDate = new Date(this.startDate);
    this.endDate = new Date(this.endDate);

    this.startDateChange.emit(this.startDate);
    this.endDateChange.emit(this.endDate);
  }
}
