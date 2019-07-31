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

@NgModule({
  declarations: [AdmincontainerComponent, TeamListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([TeamEffects])
  ]
})
export class AdminModule {}
