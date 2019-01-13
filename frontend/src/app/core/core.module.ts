import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PfHttpService } from './services/pf-http.service';
import { ProfileService } from './services/profile.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    PfHttpService,
    {
      provide: ProfileService,
      useClass: ProfileService,
    },
    AuthService,
  ],
})
export class CoreModule {}
