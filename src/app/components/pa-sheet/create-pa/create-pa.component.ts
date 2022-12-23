import { Component, OnInit } from '@angular/core';
import { PAsheetModel } from 'src/app/models/pasheet.model';
import { PAsheetService } from 'src/app/services/pasheet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-create-pa',
  templateUrl: './create-pa.component.html',
  styleUrls: ['./create-pa.component.css']
})
export class CreatePAComponent implements OnInit {

  pasheet = new PAsheetModel();
  isCreating = false;
  isLoading = false;
  departments : DepartmentModel[] | undefined ;

  constructor(private pasheetService: PAsheetService, private route: ActivatedRoute , private router: Router, private departmentService : DepartmentService ) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  onSubmit() {
    this.isCreating = true;
    if(this.pasheet.start_date > this.pasheet.due_date){

      alert("Start date should be before due date");
      return;
    }

    else{
      this.pasheetService.create(this.pasheet).subscribe({


        next: (res) => {



            console.log(this.pasheet);
            this.isCreating = false;
            this.pasheet = new PAsheetModel();
            alert("PA sheet Created");
            console.log('response: ' + res);
            this.router.navigate(["admin/admin-pa"]);



        },
        error: (err) => {
          this.isCreating = false;
          console.log(this.pasheet);
        },
      });
    }

  }

  getDepartments(){
    console.log('hi');
    //this.isLoading = true;
    this.departmentService.getList().subscribe({
      next: (res) => {
        this.departments = res;
        console.log('this.departmentCriterias');
        console.log(this.departments);
        //this.isLoading = false;
      },
      error: (error) => {
        console.log('error');
        this.isLoading = false;
      },
    });
  }



}
