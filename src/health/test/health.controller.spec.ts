import { HealthCheckService, TerminusModule } from '@nestjs/terminus';
import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from '../health.controller';

describe('HealthController', () => {
  let controller: HealthController;
  let spyservice: HealthCheckService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      imports: [TerminusModule]
    }).compile();

    controller = module.get<HealthController>(HealthController);
    spyservice = module.get<HealthCheckService>(HealthCheckService);
    spyservice.check = jest.fn().mockResolvedValueOnce({ "status": "ok" });
  });

  it('HealthController - should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('HealthController - check() should be defined', () => {
    expect(controller.check).toBeDefined();
  });

  it('HealthController - check() should return health check result', async () => {
    const response = await controller.check();
    expect(response.status).toEqual("ok");
  });
});
