import { ITask } from "../interfaces/task.interface";

export class Task implements ITask {
  private readonly somePrivateField = 'ThisIsPrivate';

  public readonly id: number;
  public readonly ownerId: number;

  public title: string;
  public description: string;
  public isDone: boolean;
  public isDisabled?: boolean | undefined;
  public isArchivated?: boolean | undefined;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.isDone = false;
    this.id = this.generateId();
    this.ownerId = this.generateOwnerId();
  }

  public updateTitle(newTitle: string): void {
    this.title = newTitle;
  }

  public updateDescription(newDescription: string): void {
    this.description = newDescription;
  }

  public toArchive(): void {
    this.isArchivated = true;
  }

  private generateId(): number {
    return 1;
  }

  private generateOwnerId(): number {
    return 1;
  }
}