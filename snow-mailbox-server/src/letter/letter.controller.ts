import {
  Body,
  Controller,
  Headers,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FileInterceptor } from '@nestjs/platform-express';
import { Model } from 'mongoose';
import { extname } from 'path';
import { Letters } from 'src/schema/letter.schema';
import { Mailbox } from 'src/schema/mailbox.schema';
import { Users } from 'src/schema/users.schema';
import { JwtService } from 'src/utils/jwt.service';
import { LetterService } from './letter.service';
import { diskStorage } from 'multer';
import { Card } from 'src/schema/card.schema';

@Controller('letter')
export class LetterController {
  constructor(
    private letterService: LetterService,
    @InjectModel(Users.name) private readonly usersModel: Model<Users>,
  ) {}

  @Post('/card')
  async createCard(@Body() requestBody: Card): Promise<String> {
    console.log(requestBody);
    return this.letterService.createCard(requestBody);
  }
}
