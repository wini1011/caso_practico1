import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service';
import { TaskModule } from '../task-module/task-module.module';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.getTasks();
    });
  }
  editTask(task: Task) {

  }

  createTask(task: Task) {
    this.taskService.createTask(task).subscribe(() => {
      this.getTasks();
    });
  }
}
