import { Module } from '@nestjs/common';
import { EirService } from './eir.service';
import { EirController } from './eir.controller';

@Module({
  controllers: [EirController],
  providers: [EirService]
})
export class EirModule {}
