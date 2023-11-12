import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Card {
  _id: mongoose.Types.ObjectId;

  @Prop()
  card_color: string;

  @Prop()
  card_sticker: string;

  @Prop()
  card_deco: string;

  @Prop()
  card_text: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
