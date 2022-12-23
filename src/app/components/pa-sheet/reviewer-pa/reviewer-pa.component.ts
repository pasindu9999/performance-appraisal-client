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
  isCreating = false;
  id : string='';
  departmentId : string = '';
  departmentCriteriaList : DepartmentCriteriaModel[] | undefined  ;
  resultList : ResultModel[] | undefined  ;
  results = new ResultModel();
  x : number = 0;
  results1 = new ResultModel();

  constructor(private criteriagroupService : CriteriaGroupService , private criteriaService :  CriteriaService, private resultService : ResultService, private departmentCriteriaService : DepartmentCriteriaService, private router : Router) { }

  ngOnInit(): void {
    this.getList();
    this.departmentId = JSON.parse(localStorage.getItem('id') || '{}');
    console.log(this.departmentId)
    this.getCriteriaGroupList(this.departmentId);
    this.results.reviweeId = "CCA10BA7-D293-42E3-6C0A-08DA58318A9E" ;
    this.results.reviwerId = "8401D06C-9A3E-425E-EEFF-08DA584D36F3" ;
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

  onSubmit(c_Id: string, ind: number) {
    this.results.criteriaId = c_Id;
    this.results.marks = this.results.markSelected[ind];
    this.isCreating = true;

    this.x = this.results.marks.valueOf();
    console.log(this.x);
    this.results1.marks = this.x;
    this.results1.criteriaId = this.results.criteriaId;
    this.results1.reviweeId = this.results.reviweeId;
    this.results1.reviwerId = this.results.reviwerId;

    console.log("hi");
    console.log(this.results1);
    this.resultService.create(this.results1).subscribe({
      next: (res) => {
        this.isCreating = false;
        this.results1 = new ResultModel();
        alert("successfully reviewed");
        console.log('response: ' + res);
        //this.router.navigate(["admin/view-criteria"]);

      },
      error: (err) => {
        console.log(this.results1);
        this.isCreating = false;
      },
    });

  }
}
