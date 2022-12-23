import { Component, OnInit } from '@angular/core';
import { CriteriaGroupService } from 'src/app/services/criteriaGroup.service';
import { criteriaGroupModel } from 'src/app/models/criteriaGroup.model';
import { DepartmentCriteriaService } from 'src/app/services/departmentCriteria.service';
import { DepartmentCriteriaModel } from 'src/app/models/departmentCriteria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-depcriteria',
  templateUrl: './edit-depcriteria.component.html',
  styleUrls: ['./edit-depcriteria.component.css']
})
export class EditDepcriteriaComponent implements OnInit {

  departmentId : string = '';
  isLoading = false;
  departmentCriteriaList = new DepartmentCriteriaModel();
  departmentCriterias : DepartmentCriteriaModel[] | undefined ;
  // show : Boolean = false;
  // cshow : Boolean = true;
  id : string = '';
  employee: any;
 // isUpdating : Boolean = false;
  //criteriaGroups : criteriaGroupModel[] | undefined  ;
  criteriaGroups : criteriaGroupModel[] | undefined ;
  isCreating = false;
  weightage: number = 0;
  isUpdating = false;

  constructor(private criteriaGroupService : CriteriaGroupService, private departmentCriteriaService : DepartmentCriteriaService, private router : Router) { }

  ngOnInit(): void {
    this.departmentId = JSON.parse(localStorage.getItem('id') || '{}');
    console.log(this.departmentId);
    this.getCriteriaGroups();
    this.getWeightages(this.departmentId);
  }

  getCriteriaGroups(){
    console.log('hi');
    //this.isLoading = true;
    this.criteriaGroupService.getList().subscribe({
      next: (res) => {
        this.criteriaGroups = res;
        console.log('this.departmentCriterias');
        console.log(this.criteriaGroups);
        //this.isLoading = false;
      },
      error: (error) => {
        console.log('error');
        this.isLoading = false;
      },
    });
  }

  getWeightages(departmentId : string){
    this.isLoading = true;
    this.departmentCriteriaService.getTotalWeightage(departmentId).subscribe({
      next: (res) => {
        // this.departmentCriterias = res;
        console.log(res);
        this.weightage = res;
        this.isLoading = false;

      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  onSubmit() {
    this.isUpdating = true;

    this.departmentCriteriaList.departmentId = this.departmentId;

    if(this.weightage + this.departmentCriteriaList.weightage > 100){
      alert("Total weightage exceeds 100")
    }else{
      this.departmentCriteriaService.update(this.departmentCriteriaList).subscribe({
        next: (res) => {

          if(res == "Alredy added"){

            alert(res);
          }

          else{
            this.isUpdating = false;
            this.departmentCriteriaList = new DepartmentCriteriaModel();
            console.log(res);
            alert("criteria  Created");

            this.router.navigate(["admin/view-department"]);

          }

        },
        error: (err) => {
          console.log(this.departmentCriteriaList);
          this.isUpdating = false;
          alert("error");
        },
      });
    }


  }

}
