import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentCriteriaModel } from 'src/app/models/departmentCriteria.model';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentCriteriaService } from 'src/app/services/departmentCriteria.service';


@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
  isLoading = false;
  departmentList: DepartmentModel[] | undefined;
  departmentCriteriaList : DepartmentCriteriaModel[] | undefined;
  did: string = 'A180FB37-85C3-416E-4DE4-08DA55568E1B';
  constructor(private departmentService: DepartmentService
    ,private departmentCriteriaService: DepartmentCriteriaService) { }

  ngOnInit(): void {
    this.getList();
    this.getdcList(this.did);
  }

  getList() {
    this.isLoading = true;
    this.departmentService.getList().subscribe({
      next: (res) => {
        this.departmentList = res;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }
  delete(id: string){
    {
      let text = "Do you want to delete the department?";
      if(confirm(text) == true){
        this.departmentService.delete(id).subscribe({
          next: (res) =>{
            if(res=="Department delete sucessful"){
              this.getList();
              alert(res);
            }
          },
        error : (error)=>{
          console.log(error);
          this.isLoading = false;
          alert("Deprtment has teams, Can't delete the Department")
        },
      });
      }

    }
  }
  edit(id: string){
    localStorage.setItem('id',JSON.stringify(id))
  }
  view(id: string){
    localStorage.setItem('id',JSON.stringify(id))
  }

  getdcList(did:string){
    console.log('hi');
    //this.isLoading = true;
    this.departmentCriteriaService.getList(did).subscribe({
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
}
