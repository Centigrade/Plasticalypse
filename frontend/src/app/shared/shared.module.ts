import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { IconPipe } from './pipes/icon.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SubmitButtonComponent, IconPipe],
  exports: [SubmitButtonComponent, IconPipe],
})
export class SharedModule {}
