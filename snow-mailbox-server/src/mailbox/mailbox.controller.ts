import { Body, Controller, Headers, Get, Param, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Mailbox } from 'src/schema/mailbox.schema';
import { Users } from 'src/schema/users.schema';
import { JwtService } from 'src/utils/jwt.service';
import { MailboxService } from './mailbox.service';

@Controller('mailbox')
export class MailboxController {
  constructor(
    private mailboxController: MailboxService,
    private readonly jwtService: JwtService,
    @InjectModel(Users.name) private readonly usersModel: Model<Users>,
  ) {}

  @Post()
  async createMailbox(
    @Body() requestBody: Mailbox,
    @Headers('authorization') authorizationHeader: string,
  ): Promise<String> {
    const token = authorizationHeader?.replace('Bearer ', '');
    const user = this.jwtService.verifyToken(token);

    const find_user = await this.usersModel.findOne({
      sub: user.sub,
    });
    requestBody.user_id = String(find_user._id);
    return await this.mailboxController.createMailbox(requestBody);
  }
}
