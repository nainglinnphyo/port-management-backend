import { Module } from '@nestjs/common';
import { EirService } from './eir.service';
import { EirController } from './eir.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [EirController],
  providers: [EirService, PrismaService],
})
export class EirModule {}
