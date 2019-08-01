import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincontainerComponent } from './admincontainer.component';
import { TeamsContainerComponent } from './containers/teams-container.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditTeamContainerComponent } from './containers/edit-team.container';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
