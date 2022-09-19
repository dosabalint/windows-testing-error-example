import { Test } from '@nestjs/testing';
import { SmoothieModule } from './smoothie.module';
import { SmoothieService } from './smoothie.service';
import { BananaService } from '../banana-module/banana.service';

describe('Smoothie service', () => {
  let bananaService: BananaService;
  let smoothieService: SmoothieService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [SmoothieModule],
    }).compile();
    await module.init();

    bananaService = module.get(BananaService);
    smoothieService = module.get(SmoothieService);
  });

  it('banana should have 80 seeds', () => {
    expect(bananaService.seeds).toBe(80);
  });

  it('smoothie should have 320 seeds', () => {
    expect(smoothieService.seeds).toBe(320);
  });
});
