import { Component, OnInit } from '@angular/core';

import { CriteriaGroupService } from 'src/app/services/criteriaGroup.service';
import { CriteriaService } from 'src/app/services/criteria.service';
import { criteriaGroupModel } from 'src/app/models/criteriaGroup.model';
import { criteriaModel } from 'src/app/models/criteria.model';
import { Router } from '@angular/router';
import { ResultService } from 'src/app/services/result.service';
import { ResultModel } from 'src/app/models/result.model';
import { DepartmentCriteriaModel } from 'src/app/models/departmentCriteria.model';
import { DepartmentCriteriaService } from 'src/app/services/departmentCriteria.service';

@Component({
  selector: 'app-reviewer-pa',
  templateUrl: './reviewer-pa.component.html',
  styleUrls: ['./reviewer-pa.component.css']
})
export class ReviewerPaComponent implements OnInit {

  isLoading = false;
  show : Boolean = true;
  criteriaGroups: criteriaGroupModel[] | undefined;
  criterias: criteriaModel[] | undefined;
  criteria : any;
  isUpdating = false;
  id : string='';
  departmentId : string = '';
  departmentCriteriaList : DepartmentCriteriaModel[] | undefined  ;



  constructor(private criteriagroupService : CriteriaGroupService , private criteriaService :  CriteriaService, private resultService : ResultService, private departmentCriteriaService : DepartmentCriteriaService) { }

  ngOnInit(): void {
    this.getList();
    this.departmentId = JSON.parse(localStorage.getItem('id') || '{}');
    console.log(this.departmentId)
    this.getCriteriaGroupList(this.departmentId);
  }

  getList() {
    this.isLoading = true;
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
        this.criterias = res;
        console.log(this.criterias)
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


  edit(id: string){

    localStorage.setItem('id',JSON.stringify(id));


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
