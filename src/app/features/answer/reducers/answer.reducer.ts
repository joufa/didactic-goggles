import { createReducer, on, Action } from '@ngrx/store';
import * as answerAction from '../answer.actions';
import { Answer } from '../answer.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

// tslint:disable-next-line
export interface State extends EntityState<Answer> {}

export const adapter: EntityAdapter<Answer> = createEntityAdapter<Answer>({
  selectId: (answer: Answer) => answer.question
});

export const initialState: State = adapter.getInitialState({});

const reducer = createReducer(
  initialState,
  on(answerAction.addAnswer, (state, value) => {
    return adapter.upsertOne(value.answer, state);
  })
);

export function answerReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
