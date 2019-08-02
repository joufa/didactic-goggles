import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../admin.model';
import { Store, select } from '@ngrx/store';
import * as fromTeams from '../reducers';
import { updateTeam } from '../actions/team.actions';

@Component({
  selector: 'agf-edit-team-container',
  template: `
    <agf-edit-team
      [team]="editTeam$ | async"
      (updatedTeam)="update($event)"
    ></agf-edit-team>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTeamContainerComponent implements OnInit {
  editTeam$: Observable<Team>;

  constructor(private store: Store<fromTeams.State>) {}

  ngOnInit() {
    this.editTeam$ = this.store.pipe(select(fromTeams.getSelectedTeam));
  }

  update(event: Team) {
    this.store.dispatch(updateTeam({ team: event }));
  }
}
