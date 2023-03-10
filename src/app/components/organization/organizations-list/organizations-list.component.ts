import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

import { OrganizationModel } from 'src/app/models/organization.model';
import { OrganisationService } from 'src/app/services/organisation.service';


@Component({
  selector: 'app-organizations-list',
  templateUrl: './organizations-list.component.html',
  styleUrls: ['./organizations-list.component.css'],
})
export class OrganizationsListComponent implements OnInit {
  isLoading = false;
  organizationList: OrganizationModel[] | undefined;
  organization = new OrganizationModel();
  constructor(private organizationService: OrganisationService) {}
 


  
  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.isLoading = true;
    this.organizationService.getList().subscribe({
      next: (res) => {
        this.organizationList = res;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  onDelete(id:string){
    this.organizationService.delete(id)
    .subscribe(
      res=>{
        this.getList();          
      },
      err=>{console.log(err)}
    )
  }

  
   
  
  

   

}
