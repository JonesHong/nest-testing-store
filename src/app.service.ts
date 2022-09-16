import { Store } from '@mycena/store/mycena-store.unittest';
import { Injectable } from '@nestjs/common';
// import { Store } from 'libs/mycena-store/mycena-store.unittest';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  constructor(){
    console.log(Store)
  }
}
