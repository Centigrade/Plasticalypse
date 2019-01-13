import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDataComponent } from './views/profile-data/profile-data.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileDataComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
