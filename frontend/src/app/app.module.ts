import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceriesModule } from './groceries/groceries.module';
import { LoginModule } from './login/login.module';
import { QuizModule } from './quiz/quiz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GroceriesModule, QuizModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
