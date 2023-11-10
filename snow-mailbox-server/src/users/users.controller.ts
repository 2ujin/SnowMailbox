import { Body, Controller, Headers, Get, Param, Post } from '@nestjs/common';
import { Users } from 'src/schema/users.schema';
import { JwtService } from 'src/utils/jwt.service';
import { UsersService } from './users.service';

@Controller('user')
export class UserssController {
  constructor(private readonly jwtService: JwtService) {}

  @Get()
  async findUserOne(
    @Headers('authorization') authorizationHeader: string,
  ): Promise<Users[]> {
    const token = authorizationHeader?.replace('Bearer ', '');

    if (!token) {
      throw 'Invalid Token';
    }

    try {
      // JWT decode
      return this.jwtService.verifyToken(token);
    } catch (error) {
      throw error;
    }
  }
}
