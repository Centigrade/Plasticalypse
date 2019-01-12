import { Component, OnInit } from '@angular/core';
import { Answer } from '../../types/answer';
import { Question } from '../../types/question';

const SCORE_FOR_HARDLINER = 4;
const SCORE_FOR_MODERATE = 2;
const SCORE_FOR_BEGINNER = 0;

const SCORE_LIMIT_BEGINNER = 8;
const SCORE_LIMIT_HARDLINER = 14;

@Component({
  selector: 'pf-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  private familyMemberCount: number;

  // Will calculate the level of the user
  private levelScore = 0;

  public multipleChoiceQuestions: Question[] = [];

  /**
   * The family member question starts at question step -1.
   * After each question is answered, the current question step is increased.
   * Starting at step 0, we can simply step through all multiple choice questions.
   */
  public currentQuestionStep = -1;

  public get levelDescription(): string {
    if (this.levelScore <= SCORE_LIMIT_BEGINNER) {
      return 'Beginner/in';
    }

    if (this.levelScore >= SCORE_LIMIT_HARDLINER) {
      return 'Hardliner/in';
    }

    return 'Moderater/e';
  }

  ngOnInit() {
    this.buildQuestions();
  }

  public addAnswerScoreToLevelScore(score: number) {
    this.levelScore += score;
    console.log(`Current level score: ${this.levelScore}.`);
    this.currentQuestionStep++;
  }

  public familyMemberCountAssigned(familyMemberCount: number) {
    this.familyMemberCount = familyMemberCount;
    console.log(`User assigned the number of family members: ${this.familyMemberCount}.`);
    this.currentQuestionStep++;
  }

  private buildQuestions() {
    this.multipleChoiceQuestions.push(
      new Question('Wie oft kaufst du beim Discounter?', [
        new Answer('Immer', SCORE_FOR_BEGINNER),
        new Answer('Manchmal', SCORE_FOR_MODERATE),
        new Answer('Nie', SCORE_FOR_HARDLINER),
      ]),
      new Question('Wie oft kaufst du in Inhabergeführten kleinen Läden ein?', [
        new Answer('Immer', SCORE_FOR_HARDLINER),
        new Answer('Manchmal', SCORE_FOR_MODERATE),
        new Answer('Nie', SCORE_FOR_BEGINNER),
      ]),
      new Question('Machst du dir eine Einkaufsliste?', [
        new Answer('Immer', SCORE_FOR_HARDLINER),
        new Answer('Manchmal', SCORE_FOR_MODERATE),
        new Answer('Nie', SCORE_FOR_BEGINNER),
      ]),
      new Question('Kaufst du Bio Produkte?', [
        new Answer('Unbedingt', SCORE_FOR_HARDLINER),
        new Answer('Wenns geht', SCORE_FOR_MODERATE),
        new Answer('Egal', SCORE_FOR_BEGINNER),
      ]),
      new Question('Wie aktiv bist du schon beim Plastik sparen?', [
        new Answer('Super aktiv', SCORE_FOR_HARDLINER),
        new Answer('Ich würde gern mehr machen', SCORE_FOR_MODERATE),
        new Answer('Ich bin noch am Anfang?', SCORE_FOR_BEGINNER),
      ]),
    );
  }
}
