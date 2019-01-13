import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pf-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss'],
})
export class ExpanderComponent implements OnInit {
  @Input() title: string;

  public isOpen = false;
}
