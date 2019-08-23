import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincontainerComponent } from './admincontainer.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TeamEffects } from './effects/team.effects';
import { SurveyEffects } from './effects/survey.effects';
import { TeamListComponent } from './components/team-list.component';
import { TeamsContainerComponent } from './containers/teams-container.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditTeamContainerComponent } from './containers/edit-team.container';
import { SurveysContainerComponent } from './containers/surveys-container.component';
import { SurveyListComponent } from './components/survey-list.component';
import { EditSurveyContainerComponent } from './containers/surveys/edit-survey.container';
import { EditSurveyComponent } from './components/edit-survey.component';
import { AdminSandboxContainerComponent } from './containers/admin.sandbox';
@NgModule({
  declarations: [
    AdminSandboxContainerComponent,
    AdmincontainerComponent,
    TeamListComponent,
    TeamsContainerComponent,
    EditTeamComponent,
    EditTeamContainerComponent,
    SurveysContainerComponent,
    SurveyListComponent,
    EditSurveyContainerComponent,
    EditSurveyComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([TeamEffects, SurveyEffects])
  ]
})
export class AdminModule {}
