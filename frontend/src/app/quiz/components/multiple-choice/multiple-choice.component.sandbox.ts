import { sandboxOf } from 'angular-playground';
import { MultipleChoiceComponent } from './multiple-choice.component';

export default sandboxOf(MultipleChoiceComponent).add('default', {
  template: `<pf-multiple-choice
  [question]="{ question: 'Hä?', answers: [ { text: 'Ja', score: 1 }, { text: 'Nein', score: 2}, { text: 'Vielleicht', score: 3} ] }"></pf-multiple-choice>`,
});
