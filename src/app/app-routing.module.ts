import { EditOrganizationComponent } from './components/organization/edit-organization/edit-organization.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrganizationComponent } from './components/organization/create-organization/create-organization.component';
import { OrganizationsListComponent } from './components/organization/organizations-list/organizations-list.component';
import { AdminLayoutComponent } from './components/layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';
import { CreateDepartmentComponent } from './components/departments/create-department/create-department.component';
import { DepartmentsListComponent } from './components/departments/departments-list/departments-list.component';
import { ViewDepartmentComponent } from './components/departments/view-department/view-department.component';
import { TeamListComponent } from './components/teams/team-list/team-list.component';
import { CreateTeamComponent } from './components/teams/create-team/create-team.component';
import { ViewTeamComponent } from './components/teams/view-team/view-team.component';

const routes: Routes = [
  { path: '', redirectTo: 'organization/create', pathMatch: 'full' },
  { path: 'organization/list', component: OrganizationsListComponent },
  { path: 'organization/create', component: CreateOrganizationComponent },
  //admin routing
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'departments-list', component: DepartmentsListComponent },
      { path: 'create-department', component: CreateDepartmentComponent },
      { path: 'view-department', component: ViewDepartmentComponent },
      { path: 'team-list', component: TeamListComponent },
      { path: 'create-team', component: CreateTeamComponent },
      { path: 'view-team', component: ViewTeamComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  //auth routing
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [{ path: '', redirectTo: 'signup', pathMatch: 'full' }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
