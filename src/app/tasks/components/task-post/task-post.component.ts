import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskModel } from '../../models/task.model';
import { TodoistService } from '../../services/todoist.service';
import { Observable } from 'rxjs';
import { ProjectModel } from '../../models/project.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-post',
  standalone: true,
  imports: [AsyncPipe, CommonModule, FormsModule, RouterModule],
  templateUrl: './task-post.component.html',
})
export class TaskPostComponent {
  private todoistService: TodoistService = inject(TodoistService)
  projectData$: Observable<ProjectModel[]> = this.todoistService.getProjects()

  taskPostModel: TaskModel = {
    content: "",
    project_id: ""
  }


  taskFormSubmit(taskPostModel: TaskModel){
    this.todoistService.postTask(taskPostModel)
  }

}
