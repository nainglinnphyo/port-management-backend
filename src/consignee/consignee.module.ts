import { Module } from '@nestjs/common';
import { ConsigneeService } from './consignee.service';
import { ConsigneeController } from './consignee.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ConsigneeController],
  providers: [ConsigneeService, PrismaService],
})
export class ConsigneeModule {}
