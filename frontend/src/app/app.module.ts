import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { GroceriesModule } from './groceries/groceries.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { QuizModule } from './quiz/quiz.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    GroceriesModule,
    QuizModule,
    LoginModule,
    EvaluationModule,
    CoreModule,
    ProfileModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
