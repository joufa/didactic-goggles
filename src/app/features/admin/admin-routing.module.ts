import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincontainerComponent } from './admincontainer.component';

const routes: Routes = [
    {
      path: '',
      component: AdmincontainerComponent
     
      
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule {}