import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { QuestionData, AnswerDataState, Answer } from '../answer.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addAnswer } from '../answer.actions';

@Component({
  selector: 'agf-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyComponent implements OnInit, OnDestroy {
  surveyId: string;
  mockQuestions: QuestionData[] = [
    { title: 'How much is the fish?' },
    { title: 'Testquestion 2' }
  ];

  constructor(
    private route: ActivatedRoute,
    private store: Store<AnswerDataState>
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.surveyId = params.get('surveyId');
    });
  }

  get id() {
    return this.surveyId;
  }

  handleValue(event: any) {
    const answer: Answer = {
      surveyId: this.surveyId,
      question: event.title,
      value: event.value
    };
    this.store.dispatch(addAnswer({ answer: answer }));
  }
  ngOnDestroy(): void {}

  answer() {
    return;
  }
}
