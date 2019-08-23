import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Survey, Team, QuestionSet } from '../admin.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'agf-edit-survey',
  templateUrl: './edit-survey.component.html',
  styles: [
    `
      mat-card {
        margin: 5px;
      }

      ,
      .cdk-drag-preview {
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
          0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }

      .cdk-drag-placeholder {
        opacity: 0;
      }

      .cdk-drag-animating {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      ,
      .example-list.cdk-drop-list-dragging
        .example-box:not(.cdk-drag-placeholder) {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSurveyComponent implements OnInit {
  @Input()
  teams: Team[];

  @Input()
  survey: Survey;

  @Output()
  edit = new EventEmitter<Survey>();

  testArray = ['a', 'b'];
  realArray = [...this.testArray];
  newQuestionSet = new FormGroup({
    name: new FormControl('')
  });

  questionsSetVm: QuestionSet[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.survey.questions !== undefined) {
      this.questionsSetVm = this.survey.questions;
    }
  }

  remove(team: Team) {
    const index = this.survey.teams.indexOf(team.teamId, 0);

    if (index > -1) {
      this.survey.teams.splice(index, 1);
    }

    this.edit.emit(this.survey);
  }

  get surveyName() {
    return this.survey === null || this.survey === undefined
      ? 'Not found...'
      : this.survey.name;
  }

  get surveyTeams(): Team[] {
    return this.filterSurveyTeams(this.teams, this.survey.teams);
  }

  get availableTeams(): Team[] {
    return this.filterAvailableTeams(this.teams, this.survey.teams);
  }

  private filterSurveyTeams(passedArray: Team[], passedFilter: string[]) {
    const filteredArray = passedArray.filter(function(el: Team) {
      for (let i = 0; i < passedFilter.length; i++) {
        if (el.teamId === passedFilter[i]) {
          return true;
        }
      }
      return false;
    });
    return filteredArray;
  }

  private filterAvailableTeams(passedArray: Team[], passedFilter: string[]) {
    const filteredArray = passedArray.filter(function(el: Team) {
      for (let i = 0; i < passedFilter.length; i++) {
        if (el.teamId !== passedFilter[i]) {
          return true;
        }
      }
      return false;
    });
    return filteredArray;
  }

  debug(a: any) {
    return JSON.stringify(a);
  }
  addTeam(team: Team) {
    this.survey.teams.push(team.teamId);

    this.edit.emit(this.survey);
  }

  addQuestionSet() {
    const name = this.newQuestionSet.value['name'];
    const qsLength =
      this.questionsSetVm.length > 0 ? this.questionsSetVm.length : 0;

    if (name === undefined) {
      return;
    }
    this.newQuestionSet.patchValue({
      name: ''
    });

    const qs: QuestionSet = {
      name: name,
      order: qsLength + 1,
      questions: []
    };

    this.questionsSetVm.push(qs);
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  test() {
    return ['juu', 'joo'];
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.testArray, event.previousIndex, event.currentIndex);
    this.realArray = [
      ...this.move(this.realArray, event.previousIndex, event.currentIndex)
    ];
  }

  move(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      let k = new_index - arr.length;
      while (k-- + 1) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  }
}
