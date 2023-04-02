import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AzureADStrategy } from './authentication/strategies/azuread.strategy';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './health/health.module';
import { GreetingsModule } from './greetings/greetings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GreetingsModule,
    HealthModule
  ],
  controllers: [],
  providers: [AzureADStrategy],
})
export class AppModule { }
