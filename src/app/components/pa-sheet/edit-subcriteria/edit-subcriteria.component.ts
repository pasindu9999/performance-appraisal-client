import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { criteriaModel } from 'src/app/models/criteria.model';
import { CriteriaService } from 'src/app/services/criteria.service';

@Component({
  selector: 'app-edit-subcriteria',
  templateUrl: './edit-subcriteria.component.html',
  styleUrls: ['./edit-subcriteria.component.css']
})
export class EditSubcriteriaComponent implements OnInit {

  id : string = '';
  isUpdating = false;

  isCreating = false;
  criteria : any;
  //criterias = new criteriaModel();

  constructor(private criteriaService : CriteriaService, private router: Router) { }

  ngOnInit(): void {

    this.id = JSON.parse(localStorage.getItem('id') || '{}');
    console.log(this.id);
    this.criteriaService.getcriteria(this.id).subscribe({
     next: (res)=>{
       this.criteria = res;
       console.log(this.criteria);
     },
     error : (error)=>{
       console.log(error);
     },
   });



  }

  onSubmit() {
    console.log(this.criteria);
    this.isUpdating = true;
    this.criteriaService.update(this.criteria).subscribe({
      next: (res) => {
        this.isUpdating = false;
        alert("PA sheet Updated");
        console.log('response: ' + res);
        this.router.navigate(["admin/view-pa"]);
      },
      error: (err) => {
        this.isUpdating = false;
        console.log('Error: ' + err);
        console.log("You have an error");
      },
    });
  }

//   delete(id: string){
//     console.log(id);
//     if(confirm("Are you sure to delete "+name)) {
//       console.log("Implement delete functionality here");

//     this.criteriaService.delete(id).subscribe(res=>{

//       this.getList();
//     },
//     error=>{
//       console.log(error);
//       this.isLoading = false;
//       alert("Something went wrong")
//     })
//   }

// }


}
