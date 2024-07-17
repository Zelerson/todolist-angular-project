import { AsyncPipe, DatePipe} from '@angular/common';
import { Component, inject} from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Observable} from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { ProjectsService } from '../../../projects/project.service';
import { ProjectModel } from '../../../projects/project.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  taskService: TasksService = inject(TasksService)
  projectService: ProjectsService = inject(ProjectsService)
  taskData$: Observable<TaskModel[]> = this.taskService.getTasks()
  projectData$: Observable<ProjectModel[]> = this.projectService.getProjects()

  
}
