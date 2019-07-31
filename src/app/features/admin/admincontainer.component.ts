import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './admin.model';
import { Store, select } from '@ngrx/store';
import * as fromTeams from './reducers';
import { fetchTeams } from './actions/team.actions';
@Component({
  selector: 'agf-admincontainer',
  templateUrl: './admincontainer.component.html',
  styleUrls: ['./admincontainer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdmincontainerComponent implements OnInit {
  teams$: Observable<Team[]>;
  teamsLoading$: Observable<boolean>;
  constructor(private store: Store<fromTeams.State>) {}

  ngOnInit() {
    this.teamsLoading$ = this.store.pipe(select(fromTeams.getTeamsLoading));
    this.teams$ = this.store.pipe(select(fromTeams.getAllTeams));
    this.store.dispatch(fetchTeams());
  }
}
