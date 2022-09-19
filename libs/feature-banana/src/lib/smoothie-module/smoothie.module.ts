import { Module } from '@nestjs/common';
import { BananaModule } from '../banana-module/banana.module';
import { SmoothieService } from './smoothie.service';

@Module({
  imports: [BananaModule],
  providers: [SmoothieService],
  exports: [SmoothieModule, BananaModule],
})
export class SmoothieModule {}
