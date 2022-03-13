import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SideNavComponent } from './components/layout/side-nav/side-nav.component';
import { OrganizationsListComponent } from './components/organization/organizations-list/organizations-list.component';
import { CreateOrganizationComponent } from './components/organization/create-organization/create-organization.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { EditOrganizationComponent } from './components/organization/edit-organization/edit-organization.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    OrganizationsListComponent,
    CreateOrganizationComponent,
    EditOrganizationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgbModule,ToastrModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
