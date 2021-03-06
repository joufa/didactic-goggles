import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Team } from '../admin.model';

@Component({
  selector: 'agf-team-list',
  templateUrl: './team-list.component.html',
  styles: [
    `
      table {
        width: 100%;
      }
      .example-container {
        margin: 7px;
        position: relative;
        min-height: 200px;
      }

      .example-table-container {
        position: relative;
        overflow: auto;
      }

      .example-loading-shade {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 56px;
        right: 0;
        background: rgba(0, 0, 0, 0.15);
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .example-error {
        color: #980000;
        max-width: 360px;
        text-align: center;
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

  @Output()
  edit = new EventEmitter<string>();

  displayedColumns: string[] = [
    'action',
    'name',
    'memberCount',
    'desc',
    'createdAt',
    'updatedAt'
  ];

  editTeam(id: string) {
    this.edit.emit(id);
  }
}
