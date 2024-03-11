import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getAllTasks(): string {
    return 'Get all tasks';
  }
}