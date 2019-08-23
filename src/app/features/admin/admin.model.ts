export interface Team {
  teamId: string;
  name: string;
  memberCount?: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Survey {
  id: string;
  name: string;
  teams: string[];
  questions: QuestionSet[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface QuestionSet {
  order: number;
  name: string;
  questions: Question[];
}

export interface Question {
  order: number;
  value: string;
}
