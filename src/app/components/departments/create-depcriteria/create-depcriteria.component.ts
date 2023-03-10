import { Component, OnInit } from '@angular/core';
import { CriteriaGroupService } from 'src/app/services/criteriaGroup.service';
import { criteriaGroupModel } from 'src/app/models/criteriaGroup.model';
import { DepartmentCriteriaService } from 'src/app/services/departmentCriteria.service';
import { DepartmentCriteriaModel } from 'src/app/models/departmentCriteria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-depcriteria',
  templateUrl: './create-depcriteria.component.html',
  styleUrls: ['./create-depcriteria.component.css']
})
export class CreateDepcriteriaComponent implements OnInit {

  departmentId : string = '';
  isLoading = false;
  departmentCriteriaList = new DepartmentCriteriaModel();
  departmentCriterias : DepartmentCriteriaModel[] | undefined ;
  // show : Boolean = false;
  // cshow : Boolean = true;
  id : string = '';
  employee: any;
  isUpdating : Boolean = false;
  //criteriaGroups : criteriaGroupModel[] | undefined  ;
  criteriaGroups : criteriaGroupModel[] | undefined ;
  isCreating = false;
  weightage: number = 0;

  constructor(private criteriaGroupService : CriteriaGroupService, private departmentCriteriaService : DepartmentCriteriaService, private router : Router) { }

  ngOnInit(): void {
      this.getCriteriaGroups();
      this.departmentId = JSON.parse(localStorage.getItem('id') || '{}');
      this.getWeightages(this.departmentId);

      console.log(this.departmentId);

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

  getAllList() {
    this.isLoading = true;
    this.departmentCriteriaService.getAllList().subscribe({
      next: (res) => {
        this.departmentCriterias = res;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
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

  // showCriteriaGroups(){
  //   this.criteriaGroupService.getList().subscribe(
  //     (data: any)=>{
  //       this.criteriaGroup = data,
  //       console.log(this.criteriaGroup);
  //     }
  //   )
  // }
  // onSubmit() {
  //   this.isCreating = true;
  //   console.log("hi");
  //   console.log(this.criteria);
  //   this.criteriaService.create(this.criteria).subscribe({
  //     next: (res) => {
  //       this.isCreating = false;
  //       this.criteria = new criteriaModel();
  //       alert("criteria  Created");
  //       console.log('response: ' + res);
  //       this.router.navigate(["admin/view-criteria"]);

  //     },
  //     error: (err) => {
  //       console.log(this.criteria);
  //       this.isCreating = false;
  //     },
  //   });

  // }
  view(id: string){
    localStorage.setItem('id',JSON.stringify(id))
  }

  delete(id: string){
    console.log(id);
    if(confirm("Are you sure to delete "+name)) {


    this.departmentCriteriaService.delete(id).subscribe(res=>{

      this.getAllList();
      alert("Criteria Delete Successful")
      //this.router.navigate(["admin/view-criteria"]);
    },
    error=>{
      console.log(error);
      this.isLoading = false;
      alert("Something went wrong")
    })
  }

}




  onSubmit() {
    this.isCreating = true;

    this.departmentCriteriaList.departmentId = this.departmentId;

    if(this.weightage + this.departmentCriteriaList.weightage > 100){
      alert("Total weightage exceeds 100")
    }else{
      this.departmentCriteriaService.create(this.departmentCriteriaList).subscribe({
        next: (res) => {

          if(res == "Alredy added"){

            alert(res);
          }

          else{
            this.isCreating = false;
            this.departmentCriteriaList = new DepartmentCriteriaModel();
            console.log(res);
            alert("criteria  Created");

            this.router.navigate(["admin/view-department"]);

          }

        },
        error: (err) => {
          console.log(this.departmentCriteriaList);
          this.isCreating = false;
          alert("error");
        },
      });
    }


  }

}
