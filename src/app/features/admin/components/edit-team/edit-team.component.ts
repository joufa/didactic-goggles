import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Team } from '../../admin.model';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSliderChange } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'agf-edit-team',
  templateUrl: './edit-team.component.html',
  styles: [
    `
      .form-container {
        display: flex;
        flex-direction: column;
      }

      .form-container > * {
        width: 100%;
      }
      .slider {
        display: flex;
        width: 100%;
      }

      .form-button-row button,
      .form-button-row a {
        margin-right: 8px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTeamComponent implements OnInit {
  @Input()
  team: Team;

  @Output()
  updatedTeam = new EventEmitter<Team>();

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 15;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 1;
  vertical = false;
  tickInterval = 1;

  editable = new FormGroup({
    name: new FormControl(''),
    memberCount: new FormControl(''),
    desc: new FormControl('')
  });

  sliderValue(event: MatSliderChange) {
    this.value = event.value;
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.editable.patchValue({
      name: this.team.name,
      memberCount: this.team.memberCount,
      desc: this.team.description
    }),
      (this.value = this.team.memberCount);
  }

  update() {
    const update: Team = {
      teamId: this.team.teamId,
      name: this.editable.get('name').value,
      memberCount: this.value,
      description: this.editable.get('desc').value
    };
    this.updatedTeam.emit(update);
    this.router.navigate(['/admin/teams']);
  }
}
