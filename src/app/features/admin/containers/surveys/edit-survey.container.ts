import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromAdmin from '../../reducers';
import { Survey, Team } from '../../admin.model';
import { updateSurvey } from '../../actions/survey.actions';

@Component({
  selector: 'agf-edit-survey-container',
  template: `
    <agf-edit-survey
      [teams]="teams$ | async"
      [survey]="survey$ | async"
      (edit)="update($event)"
    ></agf-edit-survey>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSurveyContainerComponent implements OnInit {
  survey$: Observable<Survey>;
  teams$: Observable<Team[]>;

  constructor(private store: Store<fromAdmin.State>) {}

  ngOnInit() {
    this.survey$ = this.store.pipe(select(fromAdmin.getSelectedSurvey));
    this.teams$ = this.store.pipe(select(fromAdmin.getAllTeams));
  }

  update(event: Survey) {
    this.store.dispatch(updateSurvey({ survey: event }));
  }
}
