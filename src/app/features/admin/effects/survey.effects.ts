import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SurveyService } from '../services/surveys.service';
import * as surveyActions from '../actions/survey.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Update } from '@ngrx/entity';
import { Survey } from '../admin.model';
import { Action } from '@ngrx/store';

@Injectable()
export class SurveyEffects {
  constructor(private actions$: Actions, private service: SurveyService) {}

  fetchSurveys = createEffect(() =>
    this.actions$.pipe(
      ofType(surveyActions.fetchSurveys),
      switchMap(() =>
        this.service.findSurveys().pipe(
          map(surveys =>
            surveyActions.fetchSurveysSuccess({ surveys: surveys })
          ),
          catchError(() => of(surveyActions.surveyError()))
        )
      )
    )
  );

  updateSurvey = createEffect(() =>
    this.actions$.pipe(
      ofType(surveyActions.updateSurvey),
      switchMap((action: any) =>
        this.service.updateSurvey(action.survey).pipe(
          map(survey => {
            const update: Update<Survey> = {
              id: survey.id,
              changes: {
                name: survey.name,
                teams: survey.teams
              }
            };
            return surveyActions.updateSurveySuccess({ survey: update });
          }),
          catchError(() => of(surveyActions.surveyError()))
        )
      )
    )
  );

  addSurvey = createEffect(() =>
    this.actions$.pipe(
      ofType(surveyActions.addSurvey),
      switchMap((action: any) =>
        this.service.addSurvey(action.survey).pipe(
          map(survey => surveyActions.addSurveySuccess({ survey: survey })),
          catchError(() => of(surveyActions.surveyError()))
        )
      )
    )
  );
}
