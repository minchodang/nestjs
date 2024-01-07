import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'getWorld!';
  }
  postHello(): string {
    return 'postWorld!';
  }
  putHello(): string {
    return 'putWorld!';
  }
  deleteHello(): string {
    return 'deleteWorld!';
  }
}
