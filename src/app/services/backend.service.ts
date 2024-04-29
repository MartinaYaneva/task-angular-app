import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private readonly tasks: Array<Task> = [];

  constructor() {
    for(let i = 0; i < tasksData.length; i++) {
      const title = tasksData[i].title;
      const description = tasksData[i].description;
      const task = new Task(title, description);
      this.tasks.push(task);
    }
  }

  public getAllTasks(): Array<Task> {
    return this.tasks; // http.get(url)
  }

  public addTask(task: Task): void {
    this.tasks.push(task); // http.post(url, data)
  }

  public update(task: Task): void {
    this.tasks.map(t => {
      if (t.id === task.id) {
        t = task;
      }
    });
  }
}

const tasksData = [
  {
    "title": "Grocery Shopping",
    "description": "Buy milk, eggs, bread, and fruits from the local grocery store.",
  },
  {
    "title": "Workout Routine",
    "description": "Complete a 30-minute workout session consisting of cardio and strength exercises.",
  },
  {
    "title": "Pay Bills",
    "description": "Settle electricity and internet bills by the end of the day.",
  },
  {
    "title": "Organize Desk",
    "description": "Declutter and organize your desk space. File away papers, clean up any unnecessary items, and create a neat workspace.",
  },
  {
    "title": "Eat something",
    "description": "Eat some fresh fruits",
  }
];
