import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from '../../types/answer';
import { Question } from '../../types/question';

@Component({
  selector: 'pf-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
export class MultipleChoiceComponent {
  /**
   * Question will be displayed as question itself and the including answer possibilities.
   */
  @Input() question: Question;

  /**
   * Occured if the answered the question. The score of the selected answer will be emitted.
   */
  @Output() answered = new EventEmitter<number>();

  // properties
  public selectedAnswer: Answer;

  //methods
  public confirm() {
    this.answered.emit(this.selectedAnswer.score);
  }

  /**
   * Generates a unique id for a given answer by concat the question with the answer text.
   */
  public generateId(answer: Answer): string {
    return this.question.question.concat(answer.text);
  }
}
