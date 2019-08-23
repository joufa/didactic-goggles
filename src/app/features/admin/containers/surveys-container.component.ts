import { OnInit, Component, ChangeDetectionStrategy } from '@angular/core';
import * as fromAdmin from '../reducers';
import { Observable } from 'rxjs';
import { Survey } from '../admin.model';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
  fetchSurveys,
  addSurvey,
  selectSurvey
} from '../actions/survey.actions';
@Component({
  selector: 'agf-surveys-container',
  template: `
    <mat-card class="title-card">
      <mat-card-content>
        Juuh
        <form class="example-form" [formGroup]="myFormGroup">
          <mat-form-field class="example-full-width">
            <input matInput placeholder="Survey name" formControlName="name" />
          </mat-form-field>
        </form>
        <button mat-raised-button (click)="addSurvey()">Add</button>
      </mat-card-content>
    </mat-card>
    <agf-survey-list
      [loading]="surveysLoading$ | async"
      [error]="surveysError$ | async"
      [surveys]="surveys$ | async"
      (edit)="select($event)"
    ></agf-survey-list>
  `,
  styles: [
    `
      .title-card {
        margin: 7px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveysContainerComponent implements OnInit {
  surveys$: Observable<Survey[]>;
  surveysLoading$: Observable<boolean>;
  surveysError$: Observable<boolean>;

  addNewSurvey = new FormGroup({
    name: new FormControl('')
  });
  builder = new FormBuilder();
  myFormGroup: FormGroup = this.builder.group({
    name: ['']
  });

  constructor(private router: Router, private store: Store<fromAdmin.State>) {}
  ngOnInit() {
    this.surveysLoading$ = this.store.pipe(select(fromAdmin.getSurveysLoading));
    this.surveys$ = this.store.pipe(select(fromAdmin.getAllSurveys));
    this.surveysError$ = this.store.pipe(select(fromAdmin.getSurveyError));
  }

  addSurvey() {
    this.store.dispatch(
      addSurvey({
        survey: { id: null, name: this.myFormGroup.get('name').value } as Survey
      })
    );
    this.myFormGroup.patchValue({
      name: ''
    });
  }

  select(event: string) {
    this.store.dispatch(selectSurvey({ survey: event }));
    this.router.navigate(['admin/surveys/edit']);
  }
}
