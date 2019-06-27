import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswercontainerComponent } from './answercontainer.component';
import { AnswerRoutingModule } from './answer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AnswercontainerComponent],
  imports: [CommonModule, AnswerRoutingModule, SharedModule]
})
export class AnswerModule {}
