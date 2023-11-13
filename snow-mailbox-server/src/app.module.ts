import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth.module';
import { LetterModule } from './letter/letter.module';
import { MailboxModule } from './mailbox/mailbox.module';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UsersModule,
    MailboxModule,
    AuthModule,
    LetterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
