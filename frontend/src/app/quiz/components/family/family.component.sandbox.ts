import { sandboxOf } from 'angular-playground';
import { FamilyComponent } from './family.component';

export default sandboxOf(FamilyComponent).add('default', {
  template: `<pf-family></pf-family>`,
});
