import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../admin.model';
import { Store, select } from '@ngrx/store';
import * as fromTeams from '../reducers';
import { fetchTeams, selectTeam } from '../actions/team.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'agf-teams-container',
  templateUrl: './teams-container.component.html',
  styles: [
    `
      .title-card {
        margin: 7px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsContainerComponent implements OnInit {
  teams$: Observable<Team[]>;
  teamsLoading$: Observable<boolean>;
  teamsError$: Observable<boolean>;
  constructor(private router: Router, private store: Store<fromTeams.State>) {}

  ngOnInit() {
    this.teamsLoading$ = this.store.pipe(select(fromTeams.getTeamsLoading));
    this.teams$ = this.store.pipe(select(fromTeams.getAllTeams));
    this.teamsError$ = this.store.pipe(select(fromTeams.getTeamsError));
    this.store.dispatch(fetchTeams());
  }

  select(event: string) {
    this.store.dispatch(selectTeam({ team: event }));
    this.router.navigate(['admin/teams/edit']);
  }
}
