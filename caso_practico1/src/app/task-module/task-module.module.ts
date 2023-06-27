import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TaskListComponent } from '../task-list/task-list.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskService } from '../task-service';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskFormComponent,
    TaskDetailComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
