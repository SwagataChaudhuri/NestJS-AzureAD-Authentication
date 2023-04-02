import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { GreetingsService } from './greetings.service';

@ApiTags('Greetings')
@Controller('greetings')
@ApiBearerAuth()
@UseGuards(AuthGuard())
export class GreetingsController {
    constructor(private readonly greetingsService: GreetingsService) { }

    @Get()
    async getGreetings(): Promise<any> {
        return this.greetingsService.getGreetings();
    }

    @Get('/:user')
    async getGreetingsPersonalized(@Param('user') user: string): Promise<any> {
        return this.greetingsService.getGreetingsPersonalized(user);
    }
}
