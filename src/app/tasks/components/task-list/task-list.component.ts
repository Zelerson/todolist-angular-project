import { AsyncPipe, CommonModule, DatePipe} from '@angular/common';
import { Component, inject, Input, OnInit} from '@angular/core';
import { TodoistService } from '../../services/todoist.service';
import { Observable, of, switchMap} from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { TaskCardComponent } from '../task-card/task-card.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [AsyncPipe, DatePipe, FormsModule, CommonModule, TaskCardComponent],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  routeParams = inject(ActivatedRoute)
  private todoistService: TodoistService = inject(TodoistService)

  taskData$: Observable<TaskModel[]> = of()

  @Input() set projectId(projectId: string) {
      this.taskData$ = this.todoistService.getTasks(projectId)
  }

  // taskData$: Observable<TaskModel[]> = this.routeParams.params.pipe(switchMap(params => 
  //   this.todoistService.getTasks(params["projectId"])
  // ))

  
}
