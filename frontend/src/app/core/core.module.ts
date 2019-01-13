import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MenuService } from './services/menu.service';
import { ProfileService } from './services/profile.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: ProfileService,
      useClass: ProfileService,
      // useClass: environment.production ? ProfileService : ProfileServiceMock,
    },
    AuthService,
    MenuService,
  ],
})
export class CoreModule {}
