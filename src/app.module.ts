import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticModule } from './static/static.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [StaticModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
