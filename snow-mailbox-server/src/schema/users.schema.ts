import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Users {
  _id: mongoose.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  locale: string;

  @Prop()
  sub: string;

  @Prop()
  nickname: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
