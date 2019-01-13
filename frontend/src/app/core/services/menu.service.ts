import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public isMenuOpen = false;

  public openMenu() {
    this.isMenuOpen = true;
  }

  public closeMenu() {
    this.isMenuOpen = false;
  }

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
