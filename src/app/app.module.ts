import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { OrganizationsListComponent } from './components/organization/organizations-list/organizations-list.component';
import { CreateOrganizationComponent } from './components/organization/create-organization/create-organization.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './components/layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/layout/auth-layout/auth-layout.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CreateDepartmentComponent } from './components/departments/create-department/create-department.component';
import { DepartmentsListComponent } from './components/departments/departments-list/departments-list.component';
import { ViewDepartmentComponent } from './components/departments/view-department/view-department.component';
import { ViewTeamComponent } from './components/teams/view-team/view-team.component';
import { CreateTeamComponent } from './components/teams/create-team/create-team.component';
import { TeamListComponent } from './components/teams/team-list/team-list.component';
import { EditOrganizationComponent } from './components/organization/edit-organization/edit-organization.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthService } from './services/auth.service';
import { CreatePAComponent } from './components/pa-sheet/create-pa/create-pa.component';
import { ViewPAComponent } from './components/pa-sheet/view-pa/view-pa.component';
import { PaListComponent } from './components/pa-sheet/pa-list/pa-list.component';
import { EditPaComponent } from './components/pa-sheet/edit-pa/edit-pa.component';
import { ReviewerPaComponent } from './components/pa-sheet/reviewer-pa/reviewer-pa.component';
import { CreateCriteriaComponent } from './components/pa-sheet/create-criteria/create-criteria.component';
import { EditCriteriaComponent } from './components/pa-sheet/edit-criteria/edit-criteria.component';
import { CreateSubcriteriaComponent } from './components/pa-sheet/create-subcriteria/create-subcriteria.component';
import { EditSubcriteriaComponent } from './components/pa-sheet/edit-subcriteria/edit-subcriteria.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrganizationsListComponent,
    CreateOrganizationComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    CreateDepartmentComponent,
    DepartmentsListComponent,
    ViewDepartmentComponent,
    ViewTeamComponent,
    TeamListComponent,
    CreateTeamComponent,
    EditOrganizationComponent,
    LoginComponent,
    SignupComponent,
    CreatePAComponent,
    ViewPAComponent,
    PaListComponent,
    EditPaComponent,
    ReviewerPaComponent,
    CreateCriteriaComponent,
    EditCriteriaComponent,
    CreateSubcriteriaComponent,
    EditSubcriteriaComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
