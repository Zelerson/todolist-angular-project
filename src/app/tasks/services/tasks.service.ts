import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { environment } from '../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private http: HttpClient = inject(HttpClient);
  private header = new HttpHeaders().set("Authorization", environment.apiHeaders.auth)

  getTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(environment.apiUrls.tasks, {'headers': this.header})
  }

  getTask(taskId: string): Observable<TaskModel> {
    return this.http.get<TaskModel>(`${environment.apiUrls.tasks}/${taskId}`)
  }
}
