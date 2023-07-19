import { Body, Controller, Get, Param, Post, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':qst?')
  @Render('index')
  root(
    @Param('qst') qst?: string, 
  ) {
    
    if(qst==undefined || qst.trim()==""){
      console.log("empty");
      return { resp: "Please Enter a Question" }
    }
    else if((qst=="ShowAll")){
      console.log("Show All");
      
      return { resp: "Show All" }
    }
    else{
      console.log("next step");
    return { resp : qst}
    }
    
    
    // res.render(this.appService.getViewName(),{ message: 'Hello world!' },);
  }

  // @Post(':lang')
  // @Render('index')
  // rootq(
  //   @Param('lang') lang: string, @Res() res: Response
  //   // @Res() pi: Response
  //   // @Req() pi
  //   // @Body() pi
  // ) {
  //   console.log("***** POST START *****");
  //   console.log(lang);
  //   // res.render('index', {name: "req.cookies.username"});   
  //   // console.log(req);
  //   console.log("***** POST END *****");
  //   return { zizzo: "SONO ZIZZO 2" }
  //   // res.render(this.appService.getViewName(),{ message: 'Hello world!' },);
  // }
}//end class AppController
