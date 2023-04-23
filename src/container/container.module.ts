import { Module } from '@nestjs/common';
import { ContainerService } from './container.service';
import { ContainerController } from './container.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [ContainerService, PrismaService, JwtService],
  controllers: [ContainerController],
})
export class ContainerModule {}
