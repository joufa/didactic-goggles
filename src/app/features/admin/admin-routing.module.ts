import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincontainerComponent } from './admincontainer.component';
import { TeamsContainerComponent } from './containers/teams-container.component';
import { EditTeamContainerComponent } from './containers/edit-team.container';
import { SurveysContainerComponent } from './containers/surveys-container.component';
import {EditSurveyContainerComponent} from './containers/surveys/edit-survey.container';
const routes: Routes = [
  {
    path: '',
    component: AdmincontainerComponent,
    children: [
      {
        path: 'teams',
        component: TeamsContainerComponent
      },
      {
        path: 'teams/edit',
        component: EditTeamContainerComponent
      },
      {
        path: 'surveys',
        component: SurveysContainerComponent
      },
      {
        path: 'surveys/edit',
        component: EditSurveyContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
