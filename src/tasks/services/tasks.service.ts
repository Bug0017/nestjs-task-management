import { CreateTaskDTO } from './../dto/create-task.dto';
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from '../models/task.model';
import { v4 as uuid } from 'uuid';
@Injectable()
export class TasksService {
  #tasks: Array<Task> = [
    {
      id: '233333333333333333',
      title: 'task 1',
      description: 'task 1 description',
      status: TaskStatus.OPEN,
    },
  ];
  getAllTasks(): Array<Task> {
    return this.#tasks;
  }

  getTaskById(id: string): Task {
    return this.#tasks.find((task) => task.id === id);
  }

  createTask(createTaskDTO: CreateTaskDTO) {
    const { title, description } = createTaskDTO;
    const task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.#tasks.push(task);
    return task;
  }

  deleteTask(taskId: string): Array<Task> {
    const tasks = this.#tasks.filter((task) => task.id !== taskId);
    return (this.#tasks = tasks);
  }

  updateTaskById(id, body) {
    const task = this.getTaskById(id);
    const updateTask = { ...task, ...body };

    const filterTask = this.#tasks.filter((task) => task.id !== id);
    filterTask.push(updateTask);
    this.#tasks = filterTask;
    return updateTask;
  }
}
