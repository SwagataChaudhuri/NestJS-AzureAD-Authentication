import { Test, TestingModule } from '@nestjs/testing';
import { GreetingsService } from '../greetings.service';
import { PassportModule } from '@nestjs/passport';

const response = { "message": "Welcome User !! Greetings from NestJS !!" };

describe('GreetingsService', () => {
  let service: GreetingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[
        PassportModule.register({
          defaultStrategy: 'AzureAD',
        })
      ],
      providers: [GreetingsService],
    }).compile();

    service = module.get<GreetingsService>(GreetingsService);
  });

  it('GreetingsService - should be defined', () => {
    expect(service).toBeDefined();
  });

  it('GreetingsService - getGreetings() should be defined', () => {
    expect(service.getGreetings).toBeDefined();
  });

  it('GreetingsService - getGreetings() should be defined', () => {
    expect(service.getGreetings).toBeDefined();
  });

  it('GreetingsService - getGreetings() should return greetings message', async () => {
  const result = await service.getGreetings();
  expect(result).toEqual(response);
  });

  it('GreetingsService - getGreetingsPersonalized() should be defined', () => {
    expect(service.getGreetingsPersonalized).toBeDefined();
  });

  it('GreetingsService - getGreetingsPersonalized() should return personalized greetings message', async () => {
    const result = await service.getGreetingsPersonalized('User');
    expect(result).toEqual(response);
  });
});
