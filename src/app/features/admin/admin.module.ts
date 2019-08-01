import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincontainerComponent } from './admincontainer.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TeamEffects } from './effects/team.effects';
import { TeamListComponent } from './components/team-list.component';
import { TeamsContainerComponent } from './containers/teams-container.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditTeamContainerComponent } from './containers/edit-team.container';
@NgModule({
  declarations: [
    AdmincontainerComponent,
    TeamListComponent,
    TeamsContainerComponent,
    EditTeamComponent,
    EditTeamContainerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([TeamEffects])
  ]
})
export class AdminModule {}
