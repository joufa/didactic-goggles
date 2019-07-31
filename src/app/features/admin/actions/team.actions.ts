import { createAction, props } from '@ngrx/store';
import { Team } from '../admin.model';

export const fetchTeams = createAction('[Admin/Teams] Fetch all teams');

export const fetchTeamsSuccess = createAction(
  '[Admin/Teams] Fetch all teams success',
  props<{ teams: Team[] }>()
);

export const teamError = createAction('[Admin/Teams] Team error');
