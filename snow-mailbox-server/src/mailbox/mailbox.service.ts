import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mailbox } from 'src/schema/mailbox.schema';
import { MailboxController } from './mailbox.controller';

@Injectable()
export class MailboxService {
  constructor(
    @InjectModel(Mailbox.name) private readonly mailboxModel: Model<Mailbox>,
  ) {}

  async createMailbox(requestBody: Mailbox): Promise<String> {
    const create: any = await this.mailboxModel.create(requestBody);
    return create._id;
  }

  async getMailbox(user_id): Promise<Mailbox> {
    return await this.mailboxModel.findOne({
      user_id,
    });
  }

  async getMailboxById(_id): Promise<Mailbox> {
    return await this.mailboxModel.findOne({
      _id,
    });
  }
}
