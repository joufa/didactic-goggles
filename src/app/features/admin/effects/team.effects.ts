import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TeamService } from '../services/team.service';
import * as teamActions from '../actions/team.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Update } from '@ngrx/entity';
import { Team } from '../admin.model';
import { Action } from '@ngrx/store';

@Injectable()
export class TeamEffects {
  constructor(private actions$: Actions, private service: TeamService) {}

  fetchTeams = createEffect(() =>
    this.actions$.pipe(
      ofType(teamActions.fetchTeams),
      switchMap(() =>
        this.service.findTeams().pipe(
          map(teams => teamActions.fetchTeamsSuccess({ teams: teams })),
          catchError(() => of(teamActions.teamError()))
        )
      )
    )
  );

  updateTeam = createEffect(() =>
    this.actions$.pipe(
      ofType(teamActions.updateTeam),
      switchMap((action: any) =>
        this.service.updateTeam(action.team).pipe(
          map(team => {
            const update: Update<Team> = {
              id: team.teamId,
              changes: {
                name: team.name,
                memberCount: team.memberCount,
                description: team.description,
                createdAt: team.createdAt,
                updatedAt: team.updatedAt
              }
            };
            return teamActions.updateTeamSuccess({ team: update });
          }),
          catchError(() => of(teamActions.teamError()))
        )
      )
    )
  );

  addTeam = createEffect(() =>
    this.actions$.pipe(
      ofType(teamActions.addTeam),
      switchMap((action: any) =>
        this.service.addTeam(action.team).pipe(
          map(team => teamActions.addTeamSuccess({ team: team })),
          catchError(() => of(teamActions.teamError))
        )
      )
    )
  );
}
