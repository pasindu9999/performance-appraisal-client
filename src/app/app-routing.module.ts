import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrganizationComponent } from './components/organization/create-organization/create-organization.component';
import { OrganizationsListComponent } from './components/organization/organizations-list/organizations-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'organization/list', pathMatch: 'full' },
  { path: 'organization/list', component: OrganizationsListComponent },
  { path: 'organization/create', component: CreateOrganizationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
