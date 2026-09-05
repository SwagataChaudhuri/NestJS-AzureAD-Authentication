import { Injectable } from '@nestjs/common';

export interface GreetingsResponse {
  message: string;
}

@Injectable()
export class GreetingsService {
  async getGreetings(): Promise<GreetingsResponse> {
    return { message: 'Welcome User !! Greetings from NestJS !!' };
  }

  async getGreetingsPersonalized(user: string): Promise<GreetingsResponse> {
    return { message: `Welcome ${user} !! Greetings from NestJS !!` };
  }
}
