import { Bind, Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}
export class Params {
  [key: string]: string | number
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
@Controller('index')
export class IndexController {
  constructor() {}

  @Get()
  getIndex(): string {
    return 'index';
  }

  @Get('about')
  @Bind(Query())
  getAbout(query: any) {
    // return 'about';
    return `${JSON.stringify(query)}`
  }

  @Post('about')
  @Bind(Req(), Res())
  postAbout(request: Request, response: Response) {
    // return 'about';
    console.log(request);
    response.status(200).send('about')
  }

  @Get('data:id')
  @Bind(Param())
  getData(params: Params) {
    return `${JSON.stringify(params)}`
  }

  @Post('data')
  @Bind(Body())
  postData(createCatDto: CreateCatDto) {
    return `${JSON.stringify(createCatDto)}`
  }
}
