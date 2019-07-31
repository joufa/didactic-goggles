import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { QuestionData } from '../answer.model';

@Component({
  selector: 'agf-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnInit {
  @Input()
  data: QuestionData;

  @Output()
  userValue = new EventEmitter<QuestionData>();

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 1;
  vertical = false;
  tickInterval = 1;
  constructor() {}

  ngOnInit() {
    this.userValue.emit({ title: this.data.title, value: this.value });
  }
  get title() {
    return this.data.title;
  }
  handleChange(event: any) {
    this.userValue.emit({ title: this.data.title, value: event.value });
  }
}
