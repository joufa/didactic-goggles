import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Team } from '../../admin.model';

@Component({
  selector: 'agf-edit-team',
  templateUrl: './edit-team.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTeamComponent implements OnInit {
  @Input()
  team: Team;

  constructor() {}

  ngOnInit() {}
}
