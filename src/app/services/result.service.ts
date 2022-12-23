import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultModel } from '../models/result.model';



@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private _baseUrl = 'https://localhost:5001/api/query';
  private _baseUrl1 = 'https://localhost:5001/api/Result';

  constructor(private http: HttpClient) {}

  getTotalbyReviwee(reviweeId:string) {
    return this.http.get<ResultModel[]>(`${this._baseUrl}/total?id=`+reviweeId);
  }

  getReviwerTotalbyReviwee(reviweeId:string) {
    return this.http.get<ResultModel[]>(`${this._baseUrl}/marksbyreviwer?id=`+reviweeId);
  }

  getGroupTotalbyReviwee(reviweeId:string) {
    return this.http.get(`${this._baseUrl}/marksbygroup?id=`+reviweeId);
  }

  create(result: ResultModel) {
    return this.http.post(`${this._baseUrl1}/create`, result, {responseType:'text'});
  }

  getReviweeTotal(reviweeId : string){
    return this.http.get(`${this._baseUrl}/reviweetotalmark?id=`+reviweeId);
  }

  getTotalbyGroups(departmentId : string){
    return this.http.get(`${this._baseUrl}/totalgroupmarksdepartment?id=`+departmentId);
  }
  getTotalDepartment(departmentId : string){
    return this.http.get(`${this._baseUrl}/totaldepartmentmark?id=`+departmentId);
  }


}
