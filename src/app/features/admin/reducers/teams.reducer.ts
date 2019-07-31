import { createReducer, on, Action } from '@ngrx/store';
import { Team } from '../admin.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as teamActions from '../actions/team.actions';

export interface State extends EntityState<Team> {
  selectedTeamId: string | null;
  loading: boolean;
  error: boolean;
}

export const adapter: EntityAdapter<Team> = createEntityAdapter<Team>({
  selectId: (team: Team) => team.teamId
});

export const initialState: State = adapter.getInitialState({
  selectedTeamId: null,
  loading: false,
  error: false
});

const reducer = createReducer(
  initialState,
  on(teamActions.fetchTeams, state => {
    return { ...state, loading: true };
  }),
  on(teamActions.fetchTeamsSuccess, (state, { teams }) => {
    return adapter.addMany(teams, {
      ...state,
      selectedTeamId: null,
      loading: false,
      error: false
    });
  }),
  on(teamActions.teamError, state => {
    return { ...state, loading: false, error: true };
  })
);

export function teamReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}

export const getSelectedId = (state: State) => state.selectedTeamId;
export const getLoading = (state: State) => state.loading;
