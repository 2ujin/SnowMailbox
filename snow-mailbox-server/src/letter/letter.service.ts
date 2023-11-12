import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from 'src/schema/card.schema';
import { Letters } from 'src/schema/letter.schema';

@Injectable()
export class LetterService {
  constructor(
    @InjectModel(Letters.name) private readonly letterModel: Model<Letters>,
    @InjectModel(Card.name) private readonly cardModel: Model<Card>,
  ) {}

  async createCard(requestBody: Card): Promise<String> {
    const create: any = await this.cardModel.create(requestBody);
    return create._id;
  }

  async selectCard(_id: string): Promise<Card> {
    return await this.cardModel.findOne({
      _id,
    });
  }

  async writeLetter(requestBody: Letters): Promise<String> {
    console.log(requestBody);
    return '';
  }
}
