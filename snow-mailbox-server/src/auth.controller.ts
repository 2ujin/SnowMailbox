// auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { Users } from './schema/users.schema';
import { UsersService } from './users/users.service';
import { JwtService } from './utils/jwt.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private userService: UsersService,
  ) {}

  @Post('/login')
  async login(@Body() requestBody: Users): Promise<{ token: string }> {
    const user = await this.userService.login(requestBody);

    if (user) {
      const token = this.jwtService.generateToken({
        sub: user.sub,
        name: user.name,
        email: user.email,
        nickname: user.nickname,
      });
      return { token };
    } else {
      throw new Error('Invalid credentials');
    }
  }
}
