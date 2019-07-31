import { createAction, props } from '@ngrx/store';
import { Answer } from './answer.model';

export const initSurvey = createAction(
  '[Answers] Init survey',
  props<{ id: string }>()
);

export const addAnswer = createAction(
  '[Answers] Add answer with value',
  props<{ answer: Answer }>()
);
