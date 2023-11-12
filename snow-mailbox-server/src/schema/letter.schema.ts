import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Letters {
  _id: mongoose.Types.ObjectId;

  @Prop()
  to_user_id: string;

  @Prop()
  from_user_name: string;

  @Prop()
  letter_color: string;

  @Prop()
  letter_sticker: string;

  @Prop()
  letter_deco: string;

  @Prop()
  letter_text: string;

  @Prop()
  letter: string;
}

export const LettersSchema = SchemaFactory.createForClass(Letters);
