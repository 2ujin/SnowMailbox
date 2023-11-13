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
      { name: Mailbox.name, schema: MailboxSchema },
      { name: Card.name, schema: CardSchema },
      { name: Users.name, schema: UsersSchema },
    ]),
  ],
  controllers: [LetterController],
  providers: [LetterService, JwtService],
})
export class LetterModule {}
