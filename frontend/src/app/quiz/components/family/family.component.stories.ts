import { SharedModule } from '../../../shared/shared.module';
import { FamilyComponent } from './family.component';

export default {
  title: 'FamilyComponent',
  component: FamilyComponent,
};

export const standard = () => ({
  component: FamilyComponent,
  moduleMetadata: {
    imports: [SharedModule],
  },
});
