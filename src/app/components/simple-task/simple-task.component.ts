import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-simple-task',
  templateUrl: './simple-task.component.html',
  styleUrls: ['./simple-task.component.scss']
})
export class SimpleTaskComponent {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() task: Task = {} as Task;
  @Output() addToArchive: EventEmitter<string> = new EventEmitter();


  public toArchive(): void {
    this.addToArchive.emit('Simple task event emiter');
  }
}
