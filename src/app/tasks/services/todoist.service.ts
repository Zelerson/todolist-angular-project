import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { environment } from '../../env/environment';
import { ProjectModel } from '../models/project.model';
import { SectionModel } from '../models/section.model';

@Injectable({
  providedIn: 'root'
})
export class TodoistService {
  private http: HttpClient = inject(HttpClient);
  private header = new HttpHeaders().set("Authorization", environment.apiHeaders.auth)

  getTasks(projectId: string): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(`${environment.apiUrls.tasks}?project_id=${projectId}`, {'headers': this.header})
  }

  getTask(taskId: string): Observable<TaskModel> {
    return this.http.get<TaskModel>(`${environment.apiUrls.tasks}/${taskId}`)
  }

  postTask(taskModel: TaskModel) {
    this.http.post(environment.apiUrls.tasks, taskModel, {'headers': this.header}).subscribe()
  }

  getProjects(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(environment.apiUrls.projects, {'headers': this.header})
  }

  postProject(projectModel: ProjectModel) {
    this.http.post(environment.apiUrls.projects, projectModel, {headers: this.header}).subscribe()
  } 

  getSections(projectId: String): Observable<SectionModel[]> {
    return this.http.get<SectionModel[]>(`${environment.apiUrls.sections}?project_id=${projectId}`, {headers: this.header})
  }
}
