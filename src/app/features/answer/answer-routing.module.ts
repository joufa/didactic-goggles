import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswercontainerComponent } from './answercontainer.component';
import { SurveyComponent } from './containers/survey.component';

const routes: Routes = [
  {
    path: '',
    component: AnswercontainerComponent
  },
  {
    path: 'survey/:surveyId/team/:teamId',
    component: SurveyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswerRoutingModule {}
