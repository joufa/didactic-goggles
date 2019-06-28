import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'agf-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
