import { Test } from '@nestjs/testing';
import { BananaService } from './banana.service';
import { BananaModule } from './banana.module';

describe('Banana service', () => {
  let svc: BananaService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [BananaModule],
    }).compile();
    await module.init();

    svc = module.get(BananaService);
  });

  it('should have 80 seeds', () => {
    expect(svc.seeds).toBe(80);
  });
});
