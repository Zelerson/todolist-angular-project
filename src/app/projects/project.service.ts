import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProjectModel } from './project.model';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private http: HttpClient = inject(HttpClient);
  private header = new HttpHeaders().set("Authorization", environment.apiHeaders.auth)
  
  getProjects(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(environment.apiUrls.projects, {'headers': this.header})
  }
}
