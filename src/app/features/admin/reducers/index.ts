import * as fromRoot from '../../../core/core.state';
import * as fromTeams from '../reducers/teams.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface AdminState {
  teams: fromTeams.State;
}

export interface State extends fromRoot.AppState {
  admin: AdminState;
}

export const reducers: ActionReducerMap<AdminState, any> = {
  teams: fromTeams.teamReducer
};

export const FEATURE_NAME = 'admin';
export const selectAdminState = createFeatureSelector<State, AdminState>(
  FEATURE_NAME
);

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
