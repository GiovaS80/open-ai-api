import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getViewName(){
    console.log("non so, sono getViewName");
    return "non so, sono getViewName"
    
  }

  testF(){
    console.log("sono test");
    
  }
}
