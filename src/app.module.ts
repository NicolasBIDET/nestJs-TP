import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticModule } from './static/static.module';
import { TasksModule } from './tasks/tasks.module';
import { StaticController } from './static/static.controller';
import { TasksController } from './tasks/tasks.controller';
import { StaticService } from './static/static.service';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [StaticModule, TasksModule],
  controllers: [AppController, StaticController, TasksController],
  providers: [AppService, StaticService, TasksService],
})
export class AppModule {}
