import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincontainerComponent } from './admincontainer.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdmincontainerComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
