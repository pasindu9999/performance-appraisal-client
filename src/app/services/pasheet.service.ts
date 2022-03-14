import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PAsheetModel } from '../models/pasheet.model';


@Injectable({
  providedIn: 'root'
})
export class PAsheetService {

  private _baseUrl = 'https://localhost:5001/api/PA_sheet';

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<PAsheetModel[]>(`${this._baseUrl}/list`);
  }

  getPAsheet(id:string) {
    return this.http.get<PAsheetModel[]>(`${this._baseUrl}/by-id`);
  }

  create(pasheet: PAsheetModel) {
    return this.http.post(`${this._baseUrl}/create`, pasheet, {responseType:'text'});
  }

  putData(pasheet: PAsheetModel){  
    return this.http.put(`${this._baseUrl}/update`, pasheet);  
  } 

  delete(id:any){
    return this.http.delete(`${this._baseUrl}/delete?id=`+id);
  }

}
