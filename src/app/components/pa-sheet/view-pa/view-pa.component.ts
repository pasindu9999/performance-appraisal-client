import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { CriteriaGroupService } from 'src/app/services/criteriaGroup.service';

import { CriteriaService } from 'src/app/services/criteria.service';
import { criteriaGroupModel } from 'src/app/models/criteriaGroup.model';
import { criteriaModel } from 'src/app/models/criteria.model';
import { DepartmentCriteriaService } from 'src/app/services/departmentCriteria.service';
import { DepartmentCriteriaModel } from 'src/app/models/departmentCriteria.model';

@Component({
  selector: 'app-view-pa',
  templateUrl: './view-pa.component.html',
  styleUrls: ['./view-pa.component.css']
})
export class ViewPAComponent implements OnInit {

  isLoading = false;
  show : Boolean = false;
  criteriaGroups: criteriaGroupModel[] | undefined;
  criterias: criteriaModel[] | undefined;
  criteria : any;
  criteriaGroup : any;
  isUpdating = false;
  id : string='';
  departmentId : string = '';
  departmentCriteriaList : DepartmentCriteriaModel[] | undefined  ;

  @ViewChild('scroll') scroll!: ElementRef;

  constructor(private criteriagroupService : CriteriaGroupService , private criteriaService :  CriteriaService, private departmentCriteriaService : DepartmentCriteriaService) { }

  ngOnInit(): void {


    this.getList();
    this.departmentId = JSON.parse(localStorage.getItem('id') || '{}');
    console.log(this.departmentId)
    this.getCriteriaGroupList(this.departmentId);


  }

  getList() {
    // this.isLoading = true;
    // this.criteriagroupService.getList().subscribe({
    //   next: (res) => {
    //     this.criteriaGroups = res;
    //     console.log(this.criteriaGroups)
    //     this.isLoading = false;
    //   },

    //   error: (error) => {
    //     console.log(error);
    //     this.isLoading = false;
    //   },
    // })

    this.criteriaService.getList().subscribe({
      next: (res) => {
        this. criterias = res;
        console.log(this. criterias)
        this.isLoading = false;
      },

      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
   });
  }

  getCriteriaGroupList(id:string){
    console.log('hi');
    //this.isLoading = true;
    this.departmentCriteriaService.getList(id).subscribe({
      next: (res) => {
        this.departmentCriteriaList = res;
        console.log('this.departmentCriterias');
        console.log(this.departmentCriteriaList);
        //this.isLoading = false;
      },
      error: (error) => {
        console.log('error');
        this.isLoading = false;
      },
    });
  }



  delete(id: string){
    console.log(id);
    if(confirm("Are you sure you want to delete the criteria group")) {

    this.criteriagroupService.delete(id).subscribe(res=>{

      this.getList();
    },
    error=>{
      console.log(error);
      this.isLoading = false;
      alert("Something went wrong")
    })
  }

}

  edit(id: string){
    console.log(id);
    localStorage.setItem('id',JSON.stringify(id));


  }

  editcriteria(cid: string){
    console.log(cid);
    localStorage.setItem('cid',JSON.stringify(cid));


  }


  onSubmit() {
    console.log(this.criteria);
    this.isUpdating = true;
    this.show=false;
    this.criteriaService.update(this.criteria).subscribe({
      next: (res) => {
        this.isUpdating = false;
        alert("Criteria Updated");
        console.log('response: ' + res);

      },
      error: (err) => {
        this.isUpdating = false;
        console.log('Error: ' + err)
      },
    });
  }

}
