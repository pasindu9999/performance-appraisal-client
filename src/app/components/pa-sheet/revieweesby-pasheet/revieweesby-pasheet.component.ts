import { Component, OnInit } from '@angular/core';
import { ReviweeModel } from 'src/app/models/reviwee.model';
import { ReviweeService } from 'src/app/services/reviwee.service';


@Component({
  selector: 'app-revieweesby-pasheet',
  templateUrl: './revieweesby-pasheet.component.html',
  styleUrls: ['./revieweesby-pasheet.component.css']
})
export class RevieweesbyPasheetComponent implements OnInit {

  isLoading = false;
  paSheetId : string = '';
  reviewees: ReviweeModel[] | undefined;


  constructor(private reviweeservice : ReviweeService ) { }

  ngOnInit(): void {
    this.paSheetId = JSON.parse(localStorage.getItem('id') || '{}');
    console.log(this.paSheetId);
    this.getListbyPaSheetId(this.paSheetId);
  }

  getListbyPaSheetId(paSheetId : string){
    this.isLoading = true;
    this.reviweeservice.getReviweeByPasheetId(paSheetId).subscribe({
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




}

