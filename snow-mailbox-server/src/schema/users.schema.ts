import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Users {
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
