import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team, Survey } from '../admin.model';
import { Store, select } from '@ngrx/store';
import * as fromAdmin from '../reducers';
import { fetchTeams } from '../actions/team.actions';
import { fetchSurveys } from '../actions/survey.actions';

/**
 * Sandbox-container acts as the facade layer for store
 * data in Admin feature.
 */
@Component({
  selector: 'agf-admin-sandbox',
  template: `
    <agf-admincontainer></agf-admincontainer>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminSandboxContainerComponent implements OnInit {
  teams$: Observable<Team[]>;
  teamsLoading$: Observable<boolean>;
  teamsError$: Observable<boolean>;

  surveys$: Observable<Survey[]>;
  surveysLoading$: Observable<boolean>;
  surveysError$: Observable<boolean>;

  constructor(private store: Store<fromAdmin.State>) {}
  ngOnInit() {
    this.surveysLoading$ = this.store.pipe(select(fromAdmin.getSurveysLoading));
    this.surveys$ = this.store.pipe(select(fromAdmin.getAllSurveys));
    this.surveysError$ = this.store.pipe(select(fromAdmin.getSurveyError));
    this.store.dispatch(fetchSurveys());

    this.teamsLoading$ = this.store.pipe(select(fromAdmin.getTeamsLoading));
    this.teams$ = this.store.pipe(select(fromAdmin.getAllTeams));
    this.teamsError$ = this.store.pipe(select(fromAdmin.getTeamsError));
    this.store.dispatch(fetchTeams());
  }
}
