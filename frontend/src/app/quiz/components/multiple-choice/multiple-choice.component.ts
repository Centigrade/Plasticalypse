import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Answer } from '../../types/answer';
import { Question } from '../../types/question';

@Component({
  selector: 'pf-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
export class MultipleChoiceComponent implements OnChanges {
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

  ngOnChanges() {
    this.selectedAnswer = undefined;
  }

  // methods
  public confirm() {
    this.answered.emit(this.selectedAnswer.score);
  }

  /**
   * Generates a unique id for a given answer by concat the question with the answer text.
   */
  public generateId(answer: Answer): string {
    return this.question.question.concat(answer.text);
  }

  public isNextItemSelected(currentAnswer: Answer): boolean {
    if (this.selectedAnswer === undefined) {
      return false;
    }

    const currentAnswerIndex = this.question.answers.indexOf(currentAnswer);
    const nextAnswer = this.question.answers[currentAnswerIndex + 1];
    return nextAnswer === this.selectedAnswer;
  }
}
