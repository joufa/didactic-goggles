import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Team } from '../admin.model';

@Component({
  selector: 'agf-team-list',
  templateUrl: './team-list.component.html',
  styles: [
    `
      table {
        width: 100%;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamListComponent {
  @Input()
  loading: boolean;

  @Input()
  error: boolean;

  @Input()
  teams: Team[];

  dataSource: Team[] = [
    {
      teamId: '1',
      name: 'Kissa',
      memberCount: 3,
      description: 'kake',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];
  displayedColumns: string[] = [
    'id',
    'name',
    'memberCount',
    'desc',
    'created',
    'updated'
  ];
}
