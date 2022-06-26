import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/app/models/team.model';
import { EmployeeModel } from 'src/app/models/employee.model';
import { DepartmentService } from 'src/app/services/department.service';
import { TeamService } from 'src/app/services/team.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { DepartmentCriteriaService } from 'src/app/services/departmentCriteria.service';
import { DepartmentCriteriaModel } from 'src/app/models/departmentCriteria.model';
import { CriteriaGroupService } from 'src/app/services/criteriaGroup.service';
import { criteriaGroupModel } from 'src/app/models/criteriaGroup.model';


@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  departmentId : string = '';
  isLoading = false;
  teams: TeamModel[] | undefined;
  department: any;
  employees: EmployeeModel[] | undefined;
  departmentCriteriaList : DepartmentCriteriaModel[] | undefined  ;
  departmentCriteria : any;
  show : Boolean = false;
  cshow : Boolean = true;
  id : string = '';
  employee: any;
  isUpdating : Boolean = false;
  criteriaGroups : criteriaGroupModel[] | undefined  ;

  constructor(private teamService: TeamService, private departmentService :DepartmentService, private employeeService : EmployeeService, private departmentCriteriaService : DepartmentCriteriaService, private criteriaGroupService : CriteriaGroupService) { }

  ngOnInit(): void {
    this.departmentId = JSON.parse(localStorage.getItem('id') || '{}');
    this.getDepartment(this.departmentId);
    this.getListbyDepartmentId(this.departmentId);
    this.getList(this.departmentId);
    this.getCriteriaGroups();
  }

  getDepartment(id:string){
    this.isLoading = true;
    this.departmentService.getDepartment(id).subscribe({
      next: (res) => {
        this.department = res;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  getListbyDepartmentId(departmentId : string){
    this.isLoading = true;
    this.teamService.getListbyDepartmentId(departmentId).subscribe({
      next: (res) => {
        this.teams = res;
        console.log(res);
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
    this.employeeService.getEmployeebyDepartment(departmentId).subscribe({
      next: (res) => {
        this.employees = res;
        console.log(res);
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  getList(id:string){
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

  view(id: string){
    localStorage.setItem('id',JSON.stringify(id))
  }

  onSubmit() {
    console.log(this.employee);
    this.isUpdating = true;
    this.show=false;
    this.employeeService.putData(this.employee).subscribe({
      next: (res) => {
        this.isUpdating = false;
        alert("Team Updated");
        console.log('response: ' + res);

      },
      error: (err) => {
        this.isUpdating = false;
        console.log('Error: ' + err)
      },
    });
  }

  onSubmit1() {
    console.log(this.employee);
    this.isUpdating = true;
    this.show=false;
    this.employeeService.putData(this.employee).subscribe({
      next: (res) => {
        this.isUpdating = false;
        alert("Team Updated");
        console.log('response: ' + res);

      },
      error: (err) => {
        this.isUpdating = false;
        console.log('Error: ' + err)
      },
    });
  }

  editTeam(id : string){
    this.id = id;
    this.show =true;
    console.log(this.id);
    this.employeeService.getEmployee(this.id).subscribe({
      next: (res)=>{
        this.employee = res;

      },
      error : (error)=>{
        console.log(error);
        console.log(this.employee.id);
      },
    });
}
}
