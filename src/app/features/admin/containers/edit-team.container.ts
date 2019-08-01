import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../admin.model';
import { Store, select } from '@ngrx/store';
import * as fromTeams from '../reducers';

@Component({
  selector: 'agf-edit-team-container',
  template: `
    <agf-edit-team [team]="editTeam$ | async"></agf-edit-team>
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
}
