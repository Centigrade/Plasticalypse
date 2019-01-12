import { sandboxOf } from 'angular-playground';
import { MultipleChoiceComponent } from './multiple-choice.component';

export default sandboxOf(MultipleChoiceComponent).add('Basic with 3 answers', {
  template: `<pf-multiple-choice
  [question]="{ question: 'Willst du mit mir gehn?', answers: [ { text: 'Ja', score: 1 }, { text: 'Nein', score: 2}, { text: 'Vielleicht', score: 3} ] }"></pf-multiple-choice>`,
});
