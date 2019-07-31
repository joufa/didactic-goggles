import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../admin.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private API_PATH = 'api/teams';

  constructor(private http: HttpClient) {}

  findTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.API_PATH}`);
  }
}
