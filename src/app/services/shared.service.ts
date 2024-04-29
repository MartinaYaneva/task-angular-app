import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public todoTasks: Task[] = [];
  public doneTasks: Task[] = [];

  constructor(private readonly backendService: BackendService) {
    this.updateData();
  }

  public addTask(task: Task) {
    this.backendService.addTask(task);
    this.updateData();
  }

  public updateTask(task: Task) {
    this.backendService.update(task);
    this.updateData();
  }

  private updateData(): void {
    this.todoTasks = this.backendService.getAllTasks().filter(task => !task.isDone);
    this.doneTasks = this.backendService.getAllTasks().filter(task => task.isDone);
  }
}
