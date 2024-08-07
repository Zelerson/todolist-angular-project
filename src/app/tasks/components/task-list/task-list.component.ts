import { AsyncPipe, CommonModule, DatePipe} from '@angular/common';
import { Component, inject} from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Observable} from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { ProjectsService } from '../../../projects/project.service';
import { ProjectModel } from '../../../projects/project.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [AsyncPipe, DatePipe, FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  private taskService: TasksService = inject(TasksService)
  private projectService: ProjectsService = inject(ProjectsService)
  readonly taskData$: Observable<TaskModel[]> = this.taskService.getTasks()
  readonly projectData$: Observable<ProjectModel[]> = this.projectService.getProjects()

  taskPostModel: TaskModel = {
    content: "",
    project_id: ""
  }

  projectSelected?: string = ""

  projectSelector(projectId: string){
    this.projectSelected = projectId
    console.log(this.projectSelected)
  }

  taskFormSubmit(taskPostModel: TaskModel){
    this.taskService.postTask(taskPostModel)
    this.projectSelected = taskPostModel.project_id
  }
  
}
