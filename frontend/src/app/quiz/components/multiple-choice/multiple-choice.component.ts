import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from '../../types/answer';
import { Question } from '../../types/question';

@Component({
  selector: 'pf-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css'],
})
export class MultipleChoiceComponent {
  /**
   * Question will be displayed as question itself and the including answer possibilities.
   */
  @Input() question: Question;

  /**
   * Occured if the answered the question. The score of the selected answer will be emitted.
   */
  @Output() answer = new EventEmitter<number>();

  // properties
  public selectedAnswer: Answer;

  //methods
  public confirm() {
    this.answer.emit(this.selectedAnswer.score);
  }
}
