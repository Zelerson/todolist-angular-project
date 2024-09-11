import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoistService } from '../tasks/services/todoist.service';
import { Observable } from 'rxjs';
import { ProjectModel } from '../tasks/models/project.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-navigation',
  standalone: true,
  imports: [AsyncPipe, RouterModule],
  templateUrl: './sidebar-navigation.component.html',
})
export class SidebarNavigationComponent {
  private todoistService: TodoistService = inject(TodoistService)
  projectData$: Observable<ProjectModel[]> = this.todoistService.getProjects()

}
