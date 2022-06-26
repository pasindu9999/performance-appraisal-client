import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PAsheetModel } from 'src/app/models/pasheet.model';
import { PAsheetService } from 'src/app/services/pasheet.service';

@Component({
  selector: 'app-admin-pa',
  templateUrl: './admin-pa.component.html',
  styleUrls: ['./admin-pa.component.css']
})
export class AdminPaComponent implements OnInit {

  isLoading = false;
  paList: PAsheetModel[] | undefined;

  constructor(private pasheetService: PAsheetService, private router : Router) { }

  ngOnInit(): void {

    this.getList();
  }


  getList() {
    this.isLoading = true;
    this.pasheetService.getList().subscribe({
      next: (res) => {
        this.paList = res;
        this.isLoading = false;
        console.log(this.paList);
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  delete(id: string){
    console.log(id);
    if(confirm("Are you sure to delete "+name)) {
      console.log("PA sheet deleted");

    this.pasheetService.delete(id).subscribe(res=>{

      this.getList();
    },
    error=>{
      console.log(error);
      this.isLoading = false;
      alert("Something went wrong")
    })
  }
}

view(id: string){
  localStorage.setItem('id',JSON.stringify(id))
}


  edit(id: string){

    localStorage.setItem('id',JSON.stringify(id));


  }

}
