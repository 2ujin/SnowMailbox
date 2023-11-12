import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from 'src/schema/card.schema';
import { Letters } from 'src/schema/letter.schema';
import { Mailbox } from 'src/schema/mailbox.schema';
import { Users } from 'src/schema/users.schema';

@Injectable()
export class LetterService {
  constructor(
    @InjectModel(Letters.name) private readonly letterModel: Model<Letters>,
    @InjectModel(Card.name) private readonly cardModel: Model<Card>,
    @InjectModel(Mailbox.name) private readonly mailboxModel: Model<Mailbox>,
  ) {}

  async createCard(requestBody: Card): Promise<String> {
    const create: any = await this.cardModel.create(requestBody);
    return create._id;
  }

  async selectCard(_id: string): Promise<Card> {
    const card = await this.cardModel.findOne({
      _id,
    });

    const user = await this.mailboxModel.findOne({ user_id: card.to_user_id });
    card.to_user_name = user.name;
    return card;
  }

  async selectCardByUser(to_user_id: string): Promise<Card[]> {
    return await this.cardModel.find({
      to_user_id,
    });
  }

  async writeLetter(requestBody: Letters): Promise<Letters> {
    return await this.letterModel.create(requestBody);
  }

  async selectLetter(card_id: string): Promise<Letters> {
    const result = await this.letterModel.findOne({
      card_id,
    });
    console.log(result);
    return result;
  }
}
