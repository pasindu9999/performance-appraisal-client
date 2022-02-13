import { Component, OnInit } from '@angular/core';
import { OrganizationModel } from 'src/app/models/organization.model';
import { OrganisationService } from 'src/app/services/organisation.service';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css'],
})
export class CreateOrganizationComponent implements OnInit {
  organization = new OrganizationModel();
  isCreating = false;

  constructor(private organizationService: OrganisationService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isCreating = true;
    this.organizationService.create(this.organization).subscribe({
      next: (res) => {
        this.isCreating = false;
        this.organization = new OrganizationModel();
      },
      error: (err) => {
        this.isCreating = false;
      },
    });
  }
}
