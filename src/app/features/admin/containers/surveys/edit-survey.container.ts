import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromAdmin from '../../reducers';
import { Survey } from '../../admin.model';

@Component({
  selector: 'agf-edit-survey-container',
  template: `
   jes
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSurveyContainerComponent implements OnInit {
  survey$: Observable<Survey>;

  constructor(private store: Store<fromAdmin.State>) {}

  ngOnInit() {
    this.survey$ = this.store.pipe(select(fromAdmin.getSelectedSurvey));
  }

  update(event: Survey) {
    console.log(event);
  }
}
