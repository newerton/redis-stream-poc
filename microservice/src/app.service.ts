import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('REDIS_CLIENT_PROXY') private readonly client: ClientProxy,
  ) {}

  getHello(): Observable<void> {
    return this.client.send('product-created', {
      id: 'uuid',
      title: 'New product',
      price: 123.45,
    });
  }
}
