import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswercontainerComponent } from './answercontainer.component';

const routes: Routes = [
    {
      path: '',
      component: AnswercontainerComponent
     
      
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AnswerRoutingModule {}