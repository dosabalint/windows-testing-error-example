import { Module } from '@nestjs/common';
import { CiderService } from './cider.service';
import { FeatureAppleModule } from '@windows-testing-error-example/feature-apple';

@Module({
  imports: [FeatureAppleModule],
  providers: [CiderService],
  exports: [CiderService, FeatureAppleModule],
})
export class FeatureCiderModule {}
