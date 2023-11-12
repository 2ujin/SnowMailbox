import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { Card, CardSchema } from 'src/schema/card.schema';
import { Letters, LettersSchema } from 'src/schema/letter.schema';
import { Mailbox, MailboxSchema } from 'src/schema/mailbox.schema';
import { Users, UsersSchema } from 'src/schema/users.schema';
import { JwtService } from 'src/utils/jwt.service';
import { LetterController } from './letter.controller';
import { LetterService } from './letter.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Letters.name, schema: LettersSchema },
      { name: Users.name, schema: UsersSchema },
      { name: Card.name, schema: CardSchema },
    ]),
    MulterModule.register({
      limits: {
        fileSize: 1024 * 1024 * 10, // 10MB로 제한 (원하는 크기로 조절)
      },
    }),
  ],
  controllers: [LetterController],
  providers: [LetterService],
})
export class LetterModule {}
