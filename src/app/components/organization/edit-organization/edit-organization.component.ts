import { OrganisationService } from 'src/app/services/organisation.service';
import { OrganizationModel } from 'src/app/models/organization.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-organization',
  templateUrl: './edit-organization.component.html',
  styleUrls: ['./edit-organization.component.css']
})
export class EditOrganizationComponent implements OnInit {

  id! : string;
  organization :OrganizationModel = {
    id: '',
    name: '',
    address: '',
    registationNumber: 1,
    image: ' .png' ,
    webLink:'',
    useremail:'',
  };

  constructor(private router : Router, private route : ActivatedRoute, private organizationService: OrganisationService) { }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
     
  }

  onSubmit(form: NgForm){
    let organnization: OrganizationModel = {
        id: form.value.id,
        name: form.value.name,
        address: form.value.address,
        registationNumber: form.value.registationNumber,
        webLink: form.value.webLink,
        useremail: form.value.useremail,
        image: form.value.image
    }

    console.log(organnization);

    this.organizationService.putData(organnization);

    this.router.navigateByUrl('');
  }

}
