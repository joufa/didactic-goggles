import { createReducer, on, Action } from '@ngrx/store';
import { Survey } from '../admin.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as surveyActions from '../actions/survey.actions';

export interface State extends EntityState<Survey> {
  selectedSurveyId: string | null;
  loading: boolean;
  error: boolean;
}

export const adapter: EntityAdapter<Survey> = createEntityAdapter<Survey>({
  selectId: (survey: Survey) => survey.id
});

export const initialState: State = adapter.getInitialState({
  selectedSurveyId: null,
  loading: false,
  error: false
});

const reducer = createReducer(
  initialState,
  on(surveyActions.fetchSurveys, state => {
    return { ...state, loading: true };
  }),
  on(surveyActions.selectSurvey, (state, { survey }) => {
    return { ...state, selectedSurveyId: survey };
  }),
  on(surveyActions.fetchSurveysSuccess, (state, { surveys }) => {
    return adapter.addMany(surveys, {
      ...state,
      selectedSurveyId: null,
      loading: false,
      error: false
    });
  }),
  on(surveyActions.surveyError, state => {
    return { ...state, loading: false, error: true };
  }),
  on(surveyActions.updateSurveySuccess, (state, { survey }) => {
    return adapter.updateOne(survey, state);
  }),
  on(surveyActions.addSurveySuccess, (state, { survey }) => {
    return adapter.addOne(survey, state);
  })
);

export function surveyReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}

export const getSelectedId = (state: State) => state.selectedSurveyId;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getSurveyEntities = (state: State) => state.entities;
