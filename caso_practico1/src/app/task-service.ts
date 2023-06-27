import { Injectable } from '@angular/core';
import { TaskModule } from './task-module/task-module.module';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  createTask(task: Task) {
    throw new Error('Method not implemented.');
  }
  private tasks: Task[] = [];

  constructor() { }
  getTasks(): Task[] {
    return this.tasks;
}

addTask(task: Task): void {
  this.tasks.push(task);
}
deleteTask(taskId: number): void {
  this.tasks = this.tasks.filter(task => task.id !== taskId);
}
editTask(taskId: number, updatedTask: Task): void {
  const taskIndex = this.tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    this.tasks[taskIndex] = updatedTask;
  }
}
}

