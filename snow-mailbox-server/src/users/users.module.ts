import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from 'src/schema/users.schema';
import { JwtService } from 'src/utils/jwt.service';
import { UserssController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
  controllers: [UserssController],
  providers: [UsersService, JwtService],
})
export class UsersModule {}
