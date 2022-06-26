import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DepartmentCriteriaModel } from './../models/departmentCriteria.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentCriteriaService {
  private _baseUrl = 'https://localhost:5001/api/DepartmentCriteriaGroup';

  constructor(private http: HttpClient) {}

  getList(id:string) {
    return this.http.get<DepartmentCriteriaModel[]>(`${this._baseUrl}/by-departmentId?departmentId=`+id);
  }

  create(departmentCriteria:DepartmentCriteriaModel) {
    return this.http.post(`${this._baseUrl}/create`,departmentCriteria, {responseType: 'text'});
  }

  

  delete(id:string){
    // const httpparams = new HttpParams({
    //   fromObject : {
    //     panelid : pid,
    //     reviwerid : rid
    //   }
    // })
    return this.http.delete(`${this._baseUrl}/delete?id=`+id, {responseType: 'text'});
  }


}
