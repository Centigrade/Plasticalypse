import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ProfileService } from './services/profile.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ProfileService],
})
export class CoreModule {}
