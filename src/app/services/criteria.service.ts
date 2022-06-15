import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { criteriaModel } from '../models/criteria.model';
import { PAsheetModel } from '../models/pasheet.model';


@Injectable({
  providedIn: 'root'
})
export class CriteriaService {

  private _baseUrl = 'https://localhost:5001/api/Criteria';

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<criteriaModel[]>(`${this._baseUrl}/list`);
  }

  getCriteriabyGroup(id:string) {
    return this.http.get<criteriaModel[]>(`${this._baseUrl}/by-criteriagroupid?criteriagroupid=` +id);
  }

  getcriteria(id:string) {
    return this.http.get<criteriaModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }


  // getPAsheet(id:string) {
  //   return this.http.get<PAsheetModel[]>(`${this._baseUrl}/by-id?id=`+id);
  // }

  create(criteria:  criteriaModel) {
    return this.http.post(`${this._baseUrl}/create`, criteria, {responseType:'text'});
  }

  update(pasheet: PAsheetModel){
    return this.http.put<PAsheetModel>(`${this._baseUrl}/update`, pasheet);
  }

  delete(id:any){
    return this.http.delete<string>(`${this._baseUrl}/delete?id=`+id);
  }


  putData(criteria: PAsheetModel ){
    return this.http.put(`${this._baseUrl}/update`, criteria);
  }

}
