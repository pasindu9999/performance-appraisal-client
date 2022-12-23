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
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PaListComponent } from './components/pa-sheet/pa-list/pa-list.component';
import { CreatePAComponent } from './components/pa-sheet/create-pa/create-pa.component';
import { ViewPAComponent } from './components/pa-sheet/view-pa/view-pa.component';
import { EditPaComponent } from './components/pa-sheet/edit-pa/edit-pa.component';
import { ReviewerPaComponent } from './components/pa-sheet/reviewer-pa/reviewer-pa.component';
import { CreateCriteriaComponent } from './components/pa-sheet/create-criteria/create-criteria.component';
import { EditCriteriaComponent } from './components/pa-sheet/edit-criteria/edit-criteria.component';
import { CreateSubcriteriaComponent } from './components/pa-sheet/create-subcriteria/create-subcriteria.component';
import { EditSubcriteriaComponent } from './components/pa-sheet/edit-subcriteria/edit-subcriteria.component';
import { AdminPaComponent } from './components/pa-sheet/admin-pa/admin-pa.component';
import { ViewCriteriaComponent } from './components/pa-sheet/view-criteria/view-criteria.component';
import { CreateDepcriteriaComponent } from './components/departments/create-depcriteria/create-depcriteria.component';
import { RevieweesbyPasheetComponent } from './components/pa-sheet/revieweesby-pasheet/revieweesby-pasheet.component';
import { EditDepcriteriaComponent } from './components/departments/edit-depcriteria/edit-depcriteria.component';






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
      { path: 'pa-list', component: PaListComponent },
      { path: 'create-pa', component: CreatePAComponent },
      { path: 'view-pa', component: ViewPAComponent },
      { path: 'edit-pa', component: EditPaComponent },
      { path: 'reviewer-pa', component: ReviewerPaComponent },
      { path: 'create-criteria', component: CreateCriteriaComponent },
      { path: 'edit-criteria', component: EditCriteriaComponent },
      { path: 'create-subcriteria', component:CreateSubcriteriaComponent },
      { path: 'edit-subcriteria', component:EditSubcriteriaComponent },
      { path: 'admin-pa', component: AdminPaComponent},
      { path: 'view-criteria', component: ViewCriteriaComponent},
      { path: 'create-depcriteria', component: CreateDepcriteriaComponent},
      { path: 'revieweesby-pasheet', component: RevieweesbyPasheetComponent},
      { path: 'edit-depcriteria', component: EditDepcriteriaComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    ],
  },
  //auth routing
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [{ path: '', redirectTo: 'signup', pathMatch: 'full' }],
  },

  { path: 'resgister', component:SignupComponent},
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
