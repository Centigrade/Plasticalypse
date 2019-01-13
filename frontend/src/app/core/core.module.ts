import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';
import { PfHttpService } from './services/pf-http.service';
import { ProfileService } from './services/profile.service';
import { ProfileServiceMock } from './services/profile.service.mock';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    PfHttpService,
    {
      provide: ProfileService,
      useClass: ProfileServiceMock,
    },
    AuthService,
    MenuService,
  ],
})
export class CoreModule {}
