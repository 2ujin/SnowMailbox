// auth.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { Users, UsersSchema } from './schema/users.schema';
import { UsersService } from './users/users.service';
import { JwtService } from './utils/jwt.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  controllers: [AuthController],
  providers: [JwtService, UsersService],
})
export class AuthModule {}
