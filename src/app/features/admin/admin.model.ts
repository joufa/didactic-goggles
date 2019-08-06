export interface Team {
  teamId: string;
  name: string;
  memberCount?: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Survey {
  id: string,
  name: string,
  createdAt?: Date;
  updatedAt?: Date;
}
