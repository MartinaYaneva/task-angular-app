import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {
  public archivedTasks: Task[] = [];
  
  constructor(private backendService: BackendService) {
    this.archivedTasks = this.backendService.getAllTasks().filter(task => task.isArchivated);
  }

  public restoreTask(task: Task): void {
    task.isArchivated = false;
    this.backendService.update(task);
    this.archivedTasks = this.backendService.getAllTasks().filter(task => task.isArchivated);
  }
}
