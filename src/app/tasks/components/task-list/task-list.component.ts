import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject} from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Observable, tap } from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { ProjectsService } from '../../../projects/project.service';
import { ProjectModel } from '../../../projects/project.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  taskService: TasksService = inject(TasksService)
  projectService: ProjectsService = inject(ProjectsService)
  taskData$: Observable<TaskModel[]> = this.taskService.getTasks().pipe(
      tap(task => console.log(task))
      )
  projectData$: Observable<ProjectModel[]> = this.projectService.getProjects()

  
}
