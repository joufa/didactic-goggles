import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TeamService } from '../services/team.service';
import * as teamActions from '../actions/team.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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
}
