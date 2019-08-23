import { createAction, props } from '@ngrx/store';
import { Survey } from '../admin.model';
import { Update } from '@ngrx/entity';

export const fetchSurveys = createAction('[Admin/Surveys] Fetch all teams');

export const fetchSurveysSuccess = createAction(
  '[Admin/Surveys] Fetch all surveys success',
  props<{ surveys: Survey[] }>()
);

export const selectSurvey = createAction(
  '[Admin/Surveys] Select a survey',
  props<{ survey: string }>()
);

export const addSurvey = createAction(
  '[Admin/Surveys] Add a Survey',
  props<{ survey: Survey }>()
);

export const addSurveySuccess = createAction(
  '[Admin/Surveys] Add a survey success',
  props<{ survey: Survey }>()
);

export const updateSurvey = createAction(
  '[Admin/Surveys] Update a survey',
  props<{ survey: Survey }>()
);

export const updateSurveySuccess = createAction(
  '[Admin/Surveys] Update a team success',
  props<{ survey: Update<Survey> }>()
);

export const surveyError = createAction('[Admin/Surveys] Survey error');
