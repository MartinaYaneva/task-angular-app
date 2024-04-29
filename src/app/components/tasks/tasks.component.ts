import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  constructor(public sharedService: SharedService) {}

  public setToDone(task: Task): void {
    task.isDone = true;
    this.sharedService.updateTask(task);
  }

  public addToArchive(event: string, task: Task) {
    task.isArchivated = true;
    this.sharedService.updateTask(task);

    console.log('Event emit', task, event)
  }
}
