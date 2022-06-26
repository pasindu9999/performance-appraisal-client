import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentModel } from '../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private _baseUrl = 'https://localhost:5001/api/department';

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<DepartmentModel[]>(`${this._baseUrl}/list`);
  }
  getDepartment(id:string) {
    return this.http.get<DepartmentModel[]>(`${this._baseUrl}/by-id?id=`+id);
  }
  create(department: DepartmentModel) {
    return this.http.post(`${this._baseUrl}/create`, department, {responseType:'text'});
  }
  update(department: DepartmentModel) {
    return this.http.put(`${this._baseUrl}/update`,department, {responseType: 'text'});
  }
  delete(id : any) {
    return this.http.delete(`${this._baseUrl}/delete?id=`+id,{responseType:'text'});
  }
}
