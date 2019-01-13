import { Component, Input } from '@angular/core';

@Component({
  selector: 'pf-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss'],
})
export class ExpanderComponent {
  @Input() title: string;

  public isOpen = false;
}
