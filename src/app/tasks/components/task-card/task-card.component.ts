import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './task-card.component.html',
})
export class TaskCardComponent {
  @Input({required: true}) task!: TaskModel;
}
