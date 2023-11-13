import { Body, Controller, Get, Param, Post, Headers } from '@nestjs/common';
import { Letters } from 'src/schema/letter.schema';
import { Users } from 'src/schema/users.schema';
import { LetterService } from './letter.service';
import { Card } from 'src/schema/card.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from 'src/utils/jwt.service';

@Controller('letter')
export class LetterController {
  constructor(
    private letterService: LetterService,
    private readonly jwtService: JwtService,
    @InjectModel(Users.name) private readonly usersModel: Model<Users>,
  ) {}

  @Post('/card')
  async createCard(@Body() requestBody: Card): Promise<String> {
    return this.letterService.createCard(requestBody);
  }

  @Get('/card/:id')
  async selectCard(@Param('id') id: string): Promise<Card> {
    return this.letterService.selectCard(id);
  }

  @Get('/card-counting')
  async selectCardCount(
    @Headers('authorization') authorizationHeader: string,
  ): Promise<Number> {
    const token = authorizationHeader?.replace('Bearer ', '');
    const user = this.jwtService.verifyToken(token);

    const find_user: Users = await this.usersModel.findOne({
      sub: user.sub,
    });

    const count = await this.letterService.selectCardCount(
      String(find_user._id),
    );
    return count;
  }

  @Get('/cards/:id')
  async selectCardByUser(@Param('id') user_id: string): Promise<Card[]> {
    return this.letterService.selectCardByUser(user_id);
  }

  @Post()
  async writeLetter(@Body() requestBody: Letters): Promise<Letters> {
    return this.letterService.writeLetter(requestBody);
  }

  @Get('/:id')
  async selectLetter(@Param('id') id: string): Promise<Letters> {
    console.log(id);
    return this.letterService.selectLetter(id);
  }
}
