import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../admin.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private API_PATH = 'api/teams';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  findTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.API_PATH}`);
  }

  updateTeam(team: Team): Observable<Team> {
    return this.http.put<Team>(`${this.API_PATH}`, team, this.httpOptions);
  }

  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(`${this.API_PATH}`, team, this.httpOptions);
  }
}
