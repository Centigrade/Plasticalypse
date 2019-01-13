import { Component } from '@angular/core';

@Component({
  selector: 'pf-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public register() {
    console.log('Register now!');
  }
}
