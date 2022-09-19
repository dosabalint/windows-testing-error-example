import { Test } from '@nestjs/testing';
import { SmoothieModule } from './smoothie.module';
import { SmoothieService } from './smoothie.service';

describe('Smoothie service', () => {
  let svc: SmoothieService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [SmoothieModule],
    }).compile();
    await module.init();

    svc = module.get(SmoothieService);
  });

  it('should have 8 seeds', () => {
    expect(svc.seeds).toBe(320);
  });
});
