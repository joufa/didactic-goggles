import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswercontainerComponent } from './answercontainer.component';
import { AnswerRoutingModule } from './answer-routing.module';

@NgModule({
  declarations: [AnswercontainerComponent],
  imports: [
    CommonModule,
    AnswerRoutingModule
  ]
})
export class AnswerModule { }
