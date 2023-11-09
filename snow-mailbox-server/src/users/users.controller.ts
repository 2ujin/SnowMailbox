import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Users } from 'src/schema/users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UserssController {
  constructor(private users_service: UsersService) {}

  @Get()
  async findAll(): Promise<Users[]> {
    return this.users_service.findAll();
  }
}
