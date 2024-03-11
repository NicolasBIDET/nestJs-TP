import { Injectable } from '@nestjs/common';

@Injectable()
export class StaticService {
  getStaticData(): string {
    return 'This is static data from the service!';
  }
}