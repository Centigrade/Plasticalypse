import { Answer } from './answer';
export class Question {
  constructor(public readonly question: string, public readonly answers: Answer[]) {}
}
