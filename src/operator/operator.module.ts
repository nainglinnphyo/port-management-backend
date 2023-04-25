import { Module } from '@nestjs/common';
import { OperatorService } from './operator.service';
import { OperatorController } from './operator.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OperatorController],
  providers: [OperatorService, PrismaService],
})
export class OperatorModule {}
