import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswercontainerComponent } from './answercontainer.component';
import { AnswerRoutingModule } from './answer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionComponent } from './components/question.component';
import { SurveyComponent } from './containers/survey.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './reducers';

@NgModule({
  declarations: [AnswercontainerComponent, QuestionComponent, SurveyComponent],
  imports: [
    CommonModule,
    AnswerRoutingModule,
    SharedModule,
    StoreModule.forFeature(FEATURE_NAME, reducers)
  ]
})
export class AnswerModule {}
