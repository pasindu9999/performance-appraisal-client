import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateOrganizationComponent } from './components/organization/create-organization/create-organization.component';
import { OrganizationsListComponent } from './components/organization/organizations-list/organizations-list.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateDepartmentComponent } from './pages/departments/create-department/create-department.component';
import { DepartmentsListComponent } from './pages/departments/departments-list/departments-list.component';
import { ViewDepartmentComponent } from './pages/departments/view-department/view-department.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateTeamComponent } from './pages/teams/create-team/create-team.component';
import { TeamListComponent } from './pages/teams/team-list/team-list.component';
import { ViewTeamComponent } from './pages/teams/view-team/view-team.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'organization/list', pathMatch: 'full' },
  { path: 'organization/list', component: OrganizationsListComponent },
  { path: 'organization/create', component: CreateOrganizationComponent },
   //admin routing
  {path: 'admin', component: AdminLayoutComponent,
    children: [
      { path: 'dashboard',            component: DashboardComponent},
      { path: 'departments-list',     component: DepartmentsListComponent},
      { path: 'create-department',    component: CreateDepartmentComponent },
      { path: 'view-department',      component: ViewDepartmentComponent },
      { path: 'team-list',            component: TeamListComponent},
      { path: 'create-team',          component: CreateTeamComponent},
      { path: 'view-team',            component: ViewTeamComponent },
      { path: 'user-profile',         component: UserProfileComponent},
      //{ path: 'create-PA',   component: CreatePAsheetComponent},
      { path: 'employee-list',         component: EmployeeListComponent},
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ]
  },
  //auth routing
  {path: 'auth', component: AuthLayoutComponent,
    children: [
      { path: 'login',    component: LoginComponent},
      { path: 'signup',   component: SignupComponent},
      { path: "", redirectTo: "signup", pathMatch: "full" },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
