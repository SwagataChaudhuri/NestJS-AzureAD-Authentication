import { Test, TestingModule } from '@nestjs/testing';
import { GreetingsController } from '../greetings.controller';
import { GreetingsService } from '../greetings.service';
import { PassportModule } from '@nestjs/passport';

const response = { "message": "Welcome User !! Greetings from NestJS !!" };

describe('GreetingsController', () => {
  let controller: GreetingsController;
  let spyservice: GreetingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[
        PassportModule.register({
          defaultStrategy: 'AzureAD',
        })
      ],
      controllers: [GreetingsController],
      providers: [GreetingsService]

    }).compile();

    controller = module.get<GreetingsController>(GreetingsController);
    spyservice = module.get<GreetingsService>(GreetingsService);

    spyservice.getGreetings = jest.fn().mockResolvedValue(response);
    spyservice.getGreetingsPersonalized = jest.fn().mockResolvedValue(response);
  });

  it('GreetingsController - should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('GreetingsController - getGreetings() should be defined', () => {
    expect(controller.getGreetings).toBeDefined();
  });

  it('GreetingsController - getGreetings() should return greetings message', async () => {
    const result = await controller.getGreetings();
    expect(result).toEqual(response);
  });

  it('GreetingsController - getGreetingsPersonalized() should be defined', () => {
    expect(controller.getGreetingsPersonalized).toBeDefined();
  });

  it('GreetingsController - getGreetingsPersonalized() should return personalized greetings message', async () => {
    const result = await controller.getGreetingsPersonalized('user');
    expect(result).toEqual(response);
  });
});
