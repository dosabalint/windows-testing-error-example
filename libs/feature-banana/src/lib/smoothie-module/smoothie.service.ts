import { Injectable } from '@nestjs/common';
import { BananaService } from '../banana-module/banana.service';

@Injectable()
export class SmoothieService {
  constructor(private bananaService: BananaService) {}

  get seeds(): number {
    return this.bananaService.seeds * 4;
  }
}
