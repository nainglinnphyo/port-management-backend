import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OperatorService {
  constructor(private dbService: PrismaService) {}

  async findAll() {
    return this.dbService.operator.findMany();
  }
}
