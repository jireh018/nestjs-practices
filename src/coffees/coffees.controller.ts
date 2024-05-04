/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'all my coffees';
  }
}
