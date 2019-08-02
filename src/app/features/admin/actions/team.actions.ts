import { createAction, props } from '@ngrx/store';
import { Team } from '../admin.model';
import { Update } from '@ngrx/entity';

export const fetchTeams = createAction('[Admin/Teams] Fetch all teams');

export const fetchTeamsSuccess = createAction(
  '[Admin/Teams] Fetch all teams success',
  props<{ teams: Team[] }>()
);

export const selectTeam = createAction(
  '[Admin/Teams] Select a team',
  props<{ team: string }>()
);

export const addTeam = createAction(
  '[Admin/Teams] Add a team',
  props<{ team: Team }>()
);

export const addTeamSuccess = createAction(
  '[Admin/Teams] Add a team success',
  props<{ team: Team }>()
);

export const updateTeam = createAction(
  '[Admin/Teams] Update a team',
  props<{ team: Team }>()
);

export const updateTeamSuccess = createAction(
  '[Admin/Teams] Update a team success',
  props<{ team: Update<Team> }>()
);

export const teamError = createAction('[Admin/Teams] Team error');
