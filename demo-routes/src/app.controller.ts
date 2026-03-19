import { Controller, Get, Header, HttpCode, Param, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  // *** LAB - 14 ***//


  // Demonstrate @HttpCode decorator. (A)
  @Get('custom-status')
  @HttpCode(201)
  getCustomStatus(): string {
    return 'This response has a custom HTTP status code of 201!';
  }
  
  // Demonstrate @Redirect decorator. (A)
  @Get('google')
  @Redirect('https://www.google.com', 302)
  redirectToGoogle() {
  }

  // Demonstrate @Header decorator. (A)
  @Get('headers')
  @Header('X-Custom-Header', 'Custom Value')
  getHeaders() {
    return 'This response has a custom header!';
  }

  // Demonstrate Route Wildcards. (A)
  @Get('wildcard/*')
  getWildcard() {
    return 'This route matches any path that starts with /wildcard/';
  }

  // Write a code to get id from the parameters and print it. (A)
  @Get('item/:id')
  getItemById(@Param('id') id: string) {
    return `You requested item with id: ${id}`;
  }

  // Write a code to get pageNo as parameter and return start and end record number,
  // consider 5 records per page. (C)

  @Get('pagination/:pageNo')
  getPagination(@Param('pageNo') pageNo: string) {
    const page = parseInt(pageNo, 10);
    const recordsPerPage = 5;
    const startRecord = (page - 1) * recordsPerPage + 1;
    const endRecord = page * recordsPerPage;
    return `Page ${page}: Records ${startRecord} to ${endRecord}`;
  }

  //  Demonstrate @All decorator. (A)
  @Get('all')
  getAllMethods() {
    return 'This route can handle all HTTP methods!';
  } 



}

