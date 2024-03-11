import { Controller, Get } from '@nestjs/common';

@Controller('static')
export class StaticController {
  @Get()
  getStaticData(): string {
    return 'This is static data!';
  }
}
