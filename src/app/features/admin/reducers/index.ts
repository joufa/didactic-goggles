import * as fromRoot from '../../../core/core.state';
import * as fromTeams from '../reducers/teams.reducer';
import * as fromSurveys from './surveys.reducer';

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface AdminState {
  teams: fromTeams.State;
  surveys: fromSurveys.State;
}

export interface State extends fromRoot.AppState {
  admin: AdminState;
}

export const reducers: ActionReducerMap<AdminState, any> = {
  teams: fromTeams.teamReducer,
  surveys: fromSurveys.surveyReducer
};

export const FEATURE_NAME = 'admin';
export const selectAdminState = createFeatureSelector<State, AdminState>(
  FEATURE_NAME
);

// Teams
export const selectTeamEntitiesState = createSelector(
  selectAdminState,
  state => state.teams
);

export const getSelectedTeamId = createSelector(
  selectTeamEntitiesState,
  fromTeams.getSelectedId
);

export const selectTeamEntities = createSelector(
  selectTeamEntitiesState,
  fromTeams.getTeamEntities
);

export const getSelectedTeam = createSelector(
  selectTeamEntities,
  getSelectedTeamId,
  (entities, id) => entities[id]
);

export const getTeamsLoading = createSelector(
  selectTeamEntitiesState,
  fromTeams.getLoading
);

export const getTeamsError = createSelector(
  selectTeamEntitiesState,
  fromTeams.getError
);

export const {
  selectIds: getTeamIds,
  selectEntities: getTeamEntities,
  selectAll: getAllTeams,
  selectTotal: getTotalTeams
} = fromTeams.adapter.getSelectors(selectTeamEntitiesState);

// Surveys

export const selectSurveyEntitiesState = createSelector(
  selectAdminState,
  state => state.surveys
);

export const getSelectedSurveyId = createSelector(
  selectSurveyEntitiesState,
  fromSurveys.getSelectedId
);

export const selectSurveyEntities = createSelector(
  selectSurveyEntitiesState,
  fromSurveys.getSurveyEntities
);

export const getSelectedSurvey = createSelector(
  selectSurveyEntities,
  getSelectedSurveyId,
  (entities, id) => entities[id]
);

export const getSurveysLoading = createSelector(
  selectSurveyEntitiesState,
  fromSurveys.getLoading
);

export const getSurveyError = createSelector(
  selectSurveyEntitiesState,
  fromSurveys.getError
);

export const {
  selectIds: getSurveyIds,
  selectEntities: getSurveyEntities,
  selectAll: getAllSurveys,
  selectTotal: getTotalSurveys
} = fromSurveys.adapter.getSelectors(selectSurveyEntitiesState);
