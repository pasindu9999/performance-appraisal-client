import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrganizationModel } from '../models/organization.model';

@Injectable({
  providedIn: 'root',
})
export class OrganisationService {
  private _baseUrl = 'https://localhost:5001/api/organization';

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<OrganizationModel[]>(`${this._baseUrl}/list`);
  }

  getOrganization(id:string) {
    return this.http.get<OrganizationModel[]>(`${this._baseUrl}/by-id`);
  }

  create(organization: OrganizationModel) {
    return this.http.post<string>(`${this._baseUrl}/create`, organization);
  }

  putData(organization: OrganizationModel){  
    return this.http.put(`${this._baseUrl}/update`, organization);  
  } 

  delete(id:any){
    return this.http.delete(`${this._baseUrl}/delete?id=`+id);
  }

  
}
