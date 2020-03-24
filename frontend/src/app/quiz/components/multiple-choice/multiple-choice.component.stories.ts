import { SharedModule } from '../../../shared/shared.module';
import { Question } from '../../types/question';
import { MultipleChoiceComponent } from './multiple-choice.component';

const SAMPLE_QUESTION: Question = {
  question: 'Willst du mit mir gehn?',
  answers: [
    { text: 'Ja', score: 1 },
    { text: 'Nein', score: 2 },
    { text: 'Vielleicht', score: 3 },
  ],
};

export default {
  title: 'MultipleChoiceComponent',
  component: MultipleChoiceComponent,
};

export const standard = () => ({
  component: MultipleChoiceComponent,
  moduleMetadata: {
    imports: [SharedModule],
  },
  template: `<pf-multiple-choice [question]="question"></pf-multiple-choice>`,
  props: {
    question: SAMPLE_QUESTION,
  },
});
