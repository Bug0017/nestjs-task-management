import { CreateTaskDTO } from './../dto/create-task.dto';
import { TasksService } from './../services/tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from '../models/task.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks(): Array<Task> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
    return this.tasksService.createTask(createTaskDTO);
  }

  @Put(':id')
  updateTaskById(@Param('id') id: string, @Body() body) {
    return this.tasksService.updateTaskById(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Array<Task> {
    return this.tasksService.deleteTask(id);
  }
}
