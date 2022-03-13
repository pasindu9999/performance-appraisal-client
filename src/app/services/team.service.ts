import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamModel } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private _baseUrl = 'https://localhost:44340/api/team';

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<TeamModel[]>(`${this._baseUrl}/list`);
  }

  create(team: TeamModel) {
    return this.http.post<string>(`${this._baseUrl}/create`, team);
  }
  update(team: TeamModel) {
    return this.http.post<string>(`${this._baseUrl}/update`, team);
  }
  delete(id : any) {
    return this.http.delete<string>(`${this._baseUrl}/delete?id=`+id);
  }
}
