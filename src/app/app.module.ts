import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/layout/side-nav/side-nav.component';
import { OrganizationsListComponent } from './components/organization/organizations-list/organizations-list.component';
import { CreateOrganizationComponent } from './components/organization/create-organization/create-organization.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateDepartmentComponent } from './pages/departments/create-department/create-department.component';
import { DepartmentsListComponent } from './pages/departments/departments-list/departments-list.component';
import { ViewDepartmentComponent } from './pages/departments/view-department/view-department.component';
import { ViewTeamComponent } from './pages/teams/view-team/view-team.component';
import { TeamListComponent } from './pages/teams/team-list/team-list.component';
import { CreateTeamComponent } from './pages/teams/create-team/create-team.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EmployeeListComponent } from './pages/employee/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    OrganizationsListComponent,
    CreateOrganizationComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    DashboardComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    CreateDepartmentComponent,
    DepartmentsListComponent,
    ViewDepartmentComponent,
    ViewTeamComponent,
    TeamListComponent,
    CreateTeamComponent,
    UserProfileComponent,
    EmployeeListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
