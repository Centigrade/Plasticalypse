import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataComponent } from './views/profile-data/profile-data.component';
import { FamilyMembersCountComponent } from './components/family-members-count/family-members-count.component';
import { SavingsComponent } from './components/savings/savings.component';
import { ExpanderComponent } from './components/expander/expander.component';

@NgModule({
  declarations: [ProfileDataComponent, FamilyMembersCountComponent, SavingsComponent, ExpanderComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
