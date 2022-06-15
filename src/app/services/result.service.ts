import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultModel } from '../models/result.model';



@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private _baseUrl = 'https://localhost:5001/api/result';

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<ResultModel[]>(`${this._baseUrl}/list`);
  }

  getResultbyId(id:string) {
    return this.http.get<ResultModel[]>(`${this._baseUrl}/by-id?id=` +id);
  }

  getResultbyReviewerId(id:string) {
    return this.http.get<ResultModel[]>(`${this._baseUrl}/by-reviwerid?reviwerid=` +id);
  }

  getResultbyRevieweeId(id:string) {
    return this.http.get<ResultModel[]>(`${this._baseUrl}/by-reviweeid?reviweeid=` +id);
  }


  // getPAsheet(id:string) {
  //   return this.http.get<PAsheetModel[]>(`${this._baseUrl}/by-id?id=`+id);
  // }

  create(result: ResultModel) {
    return this.http.post(`${this._baseUrl}/create`, result, {responseType:'text'});
  }

  update(result: ResultModel){
    return this.http.put<ResultModel>(`${this._baseUrl}/update`, result);
  }

  delete(id:any){
    return this.http.delete<string>(`${this._baseUrl}/delete?id=`+id);
  }


  // putData(criteria: PAsheetModel ){
  //   return this.http.put(`${this._baseUrl}/update`, criteria);
  // }

}
