import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentModel } from '../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private _baseUrl = 'https://localhost:44340/api/department';

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<DepartmentModel[]>(`${this._baseUrl}/list`);
  }

  create(department: DepartmentModel) {
    return this.http.post(`${this._baseUrl}/create`, department, {responseType:'text'});
  }
  update(department: DepartmentModel) {
    return this.http.post<string>(`${this._baseUrl}/update`, department);
  }
  delete(id : any) {
    return this.http.delete<string>(`${this._baseUrl}/delete?id=`+id);

  }
}
