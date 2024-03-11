import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAllTasks(): string {
    return 'Get all tasks from the service!';
  }
}