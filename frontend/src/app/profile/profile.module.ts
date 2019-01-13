import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpanderComponent } from './components/expander/expander.component';
import { FamilyMembersCountComponent } from './components/family-members-count/family-members-count.component';
import { SavingsComponent } from './components/savings/savings.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDataComponent } from './views/profile-data/profile-data.component';

@NgModule({
  declarations: [
    ProfileDataComponent,
    FamilyMembersCountComponent,
    SavingsComponent,
    ExpanderComponent,
  ],
  imports: [ProfileRoutingModule, CommonModule],
  exports: [ProfileDataComponent],
})
export class ProfileModule {}
