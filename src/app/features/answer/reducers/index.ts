import * as fromRoot from '../../../core/core.state';
import * as fromAnswers from './answer.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// tslint:disable-next-line
export interface AnswersState {}

export interface State extends fromRoot.AppState {
  answers: AnswersState;
}

export const reducers: ActionReducerMap<AnswersState, any> = {
  answers: fromAnswers.answerReducer
};

export const FEATURE_NAME = 'answers';
export const selectAnswers = createFeatureSelector<State, AnswersState>(
  FEATURE_NAME
);
