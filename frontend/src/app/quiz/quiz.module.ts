import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FamilyComponent } from './components/family/family.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './views/quiz/quiz.component';

@NgModule({
  declarations: [QuizComponent, FamilyComponent, MultipleChoiceComponent],
  imports: [CommonModule, QuizRoutingModule, SharedModule],
})
export class QuizModule {}
