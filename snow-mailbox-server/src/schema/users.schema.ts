import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Users {
  @Prop()
  user_token: string;

  @Prop()
  user_name: string;

  @Prop()
  nickname: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
