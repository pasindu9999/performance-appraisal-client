import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  department = new DepartmentModel();
  isCreating = false;

  constructor(private departmentService : DepartmentService ,private router: Router) { }

  ngOnInit(): void {}

  onSubmit() {
    this.isCreating = true;
    alert("Department created");
    this.departmentService.create(this.department).subscribe({
      next: (res) => {
        this.isCreating = false;
        this.department = new DepartmentModel();
        alert("Department created");
        this.router.navigate(["admin/departments-list"]);
      },
      error: (err) => {
        this.isCreating = false;
      },
    });
  }

}
