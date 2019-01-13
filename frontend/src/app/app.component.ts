import { Component } from '@angular/core';
import { MenuService } from './core/services/menu.service';

@Component({
  selector: 'pf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public menuService: MenuService) {}
}
