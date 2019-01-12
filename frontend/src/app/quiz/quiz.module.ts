import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuizComponent } from './views/quiz/quiz.component';
import { FamilyComponent } from './components/family/family.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';

@NgModule({
  declarations: [QuizComponent, FamilyComponent, MultipleChoiceComponent],
  imports: [CommonModule],
})
export class QuizModule {}
