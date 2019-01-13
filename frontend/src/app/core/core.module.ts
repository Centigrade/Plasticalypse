import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
import { ProfileServiceMock } from './services/profile.service.mock';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: ProfileService,
      useClass: environment.production ? ProfileService : ProfileServiceMock,
    },
    AuthService,
  ],
})
export class CoreModule {}
