import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AuthServiceMock } from './services/auth.service.mock';
import { EvaluationService } from './services/evaluation.service';
import { EvaluationServiceMock } from './services/evaluation.service.mock';
import { GroceryService } from './services/grocery.service';
import { GroceryServiceMock } from './services/grocery.service.mock';
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
    {
      provide: AuthService,
      useClass: AuthServiceMock,
    },
    {
      provide: GroceryService,
      useClass: GroceryServiceMock,
    },
    {
      provide: EvaluationService,
      useClass: EvaluationServiceMock,
    },
    MenuService,
  ],
})
export class CoreModule {}
