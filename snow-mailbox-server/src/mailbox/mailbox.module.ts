import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mailbox, MailboxSchema } from 'src/schema/mailbox.schema';
import { Users, UsersSchema } from 'src/schema/users.schema';
import { JwtService } from 'src/utils/jwt.service';
import { MailboxController } from './mailbox.controller';
import { MailboxService } from './mailbox.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Mailbox.name, schema: MailboxSchema },
      { name: Users.name, schema: UsersSchema },
    ]),
  ],
  controllers: [MailboxController],
  providers: [MailboxService, JwtService],
})
export class MailboxModule {}
