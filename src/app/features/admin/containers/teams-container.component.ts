import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../admin.model';
import { Store, select } from '@ngrx/store';
import * as fromTeams from '../reducers';
import { fetchTeams, selectTeam, addTeam } from '../actions/team.actions';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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

  addNewTeam = new FormGroup({
    name: new FormControl('')
  });

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

  addTeam() {
    this.store.dispatch(
      addTeam({
        team: { teamId: null, name: this.addNewTeam.get('name').value } as Team
      })
    );
    this.addNewTeam.patchValue({
      name: ''
    });
  }
}
