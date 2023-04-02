import { Module } from '@nestjs/common';
import { GreetingsController } from './greetings.controller';
import { GreetingsService } from './greetings.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'AzureAD',
    })
  ],
  controllers: [GreetingsController],
  providers: [GreetingsService]
})
export class GreetingsModule { }
