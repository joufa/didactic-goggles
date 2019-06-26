import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswercontainerComponent } from './answercontainer.component';

describe('AnswercontainerComponent', () => {
  let component: AnswercontainerComponent;
  let fixture: ComponentFixture<AnswercontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswercontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswercontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
