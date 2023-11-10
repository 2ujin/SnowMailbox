import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from '../schema/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private readonly usersModel: Model<Users>,
  ) {}

  async login(data: Users): Promise<Users> {
    let user: Users = await this.usersModel
      .findOne({
        sub: data.sub,
      })
      .exec();

    if (user) {
      return user;
    }

    return await this.usersModel.create(data);
  }

  async findUserOne(user): Promise<Users> {
    return this.usersModel
      .findOne({
        sub: user.sub,
      })
      .exec();
  }
}
