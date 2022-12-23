import { Component, OnInit } from '@angular/core';
import { PAsheetModel } from 'src/app/models/pasheet.model';
import { PAsheetService } from 'src/app/services/pasheet.service';
import { ReviweeModel } from 'src/app/models/reviwee.model';
import { ReviweeService } from 'src/app/services/reviwee.service';


@Component({
  selector: 'app-pa-list',
  templateUrl: './pa-list.component.html',
  styleUrls: ['./pa-list.component.css']
})
export class PaListComponent implements OnInit {

  isLoading = false;
  paList: PAsheetModel[] | undefined;
  reviewees: ReviweeModel[] | undefined;
  panelId = '3FE97587-2F5A-41DD-01FE-08DA58300696';

  constructor(private pasheetService: PAsheetService, private revieweeService : ReviweeService) { }

  ngOnInit(): void {

    this.getList();
    this.getRevieweesbyPanelId(this.panelId);
    console.log(this.panelId);
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

  getRevieweesbyPanelId(panelId : string ){
    this.isLoading = true;
    this.revieweeService.getReviweeByPanelId(panelId).subscribe({
      next: (res) => {
        this.reviewees = res;
        console.log(res);
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });

  }

  view(id: string){
    localStorage.setItem('id',JSON.stringify(id))
  }



  edit(id: string){

    localStorage.setItem('id',JSON.stringify(id));


  }


}
