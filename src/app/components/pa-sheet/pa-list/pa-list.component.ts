import { Component, OnInit } from '@angular/core';
import { PAsheetModel } from 'src/app/models/pasheet.model';
import { PAsheetService } from 'src/app/services/pasheet.service';

@Component({
  selector: 'app-pa-list',
  templateUrl: './pa-list.component.html',
  styleUrls: ['./pa-list.component.css']
})
export class PaListComponent implements OnInit {

  isLoading = false;
  paList: PAsheetModel[] | undefined;

  constructor(private pasheetService: PAsheetService) { }

  ngOnInit(): void {

    this.getList();
  }

  getList() {
    this.isLoading = true;
    this.pasheetService.getList().subscribe({
      next: (res) => {
        this.paList = res;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  delete(id: string){
    console.log(id);
    this.pasheetService.delete(id).subscribe(res=>{
      alert("Are you sure delete pa sheet?");
      this.getList();
    },
    error=>{
      console.log(error);
      this.isLoading = false;
      alert("Something went wrong")
    })
  }

  edit(id: string){

    localStorage.setItem('id',JSON.stringify(id));
    

  }


}
