import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Letters } from 'src/schema/letter.schema';
import { Users } from 'src/schema/users.schema';
import { LetterService } from './letter.service';
import { Card } from 'src/schema/card.schema';

@Controller('letter')
export class LetterController {
  constructor(private letterService: LetterService) {}

  @Post('/card')
  async createCard(@Body() requestBody: Card): Promise<String> {
    return this.letterService.createCard(requestBody);
  }

  @Get('/card/:id')
  async selectCard(@Param('id') id: string): Promise<Card> {
    return this.letterService.selectCard(id);
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
