import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pf-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss'],
})
export class SavingsComponent implements OnInit {
  //Property
  public title: string;

  @Input() savingAmount: number;
  @Input() batchIcon: ImageBitmap;

  constructor() {}

  ngOnInit() {}
}
