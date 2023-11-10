import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Mailbox {
  _id: mongoose.Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ type: String, unique: true })
  user_id: string;

  @Prop()
  mailbox_color: string;

  @Prop()
  mailbox_decorations: string;
}

export const MailboxSchema = SchemaFactory.createForClass(Mailbox);
