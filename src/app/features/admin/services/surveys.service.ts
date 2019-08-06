import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from '../admin.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private API_PATH = 'api/surveys';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  findSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${this.API_PATH}`);
  }

  addSurvey(survey: Survey): Observable<Survey> {
    return this.http.post<Survey>(`${this.API_PATH}`, survey, this.httpOptions);
  }
}
