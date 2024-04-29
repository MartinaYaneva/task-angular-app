export interface ITask {
  id: number;
  ownerId: number;
  title: string;
  description: string;
  isDone: boolean;
  isDisabled?: boolean;
}