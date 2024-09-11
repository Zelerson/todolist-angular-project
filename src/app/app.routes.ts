import { Routes } from '@angular/router';
import { TaskListComponent } from './tasks/components/task-list/task-list.component';
import { TaskPostComponent } from './tasks/components/task-post/task-post.component';

export const routes: Routes = [
    {
        path: 'project/:projectId',
        component: TaskListComponent
    },
    {
        path: 'create-task',
        component: TaskPostComponent
    }

];
