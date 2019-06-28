import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'agf-answercontainer',
  templateUrl: './answercontainer.component.html',
  styleUrls: ['./answercontainer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswercontainerComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  goToSurvey() {
    this.router.navigate(['/answer/survey/id/team/id']);
  }
}
