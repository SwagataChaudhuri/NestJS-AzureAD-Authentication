import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { GreetingsService, type GreetingsResponse } from './greetings.service';

@ApiTags('Greetings')
@Controller('greetings')
@ApiBearerAuth()
@UseGuards(AuthGuard())
export class GreetingsController {
  constructor(private readonly greetingsService: GreetingsService) { }

  @Get()
  async getGreetings(): Promise<GreetingsResponse> {
    return this.greetingsService.getGreetings();
  }

  @Get(':user')
  async getGreetingsPersonalized(@Param('user') user: string,): Promise<GreetingsResponse> {
    return this.greetingsService.getGreetingsPersonalized(user);
  }
}
