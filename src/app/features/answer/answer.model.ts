export interface QuestionData {
  title: string;
  value?: number;
}

export interface Answer {
  surveyId: string;
  question: string;
  value: number;
}
export interface AnswerDataState {
  surveyId: number;
  answers: Answer[];
}
