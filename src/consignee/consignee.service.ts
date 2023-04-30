import { HttpException, Injectable } from '@nestjs/common';
import { CreateConsigneeDto } from './dto/create-consignee.dto';
import { UpdateConsigneeDto } from './dto/update-consignee.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ConsigneeService {
  constructor(private dbService: PrismaService) {}

  async findOne(consigneeName: string) {
    return this.dbService.consignee
      .findMany({
        where: { consigneeName: { contains: consigneeName } },
        select: { id: true, consigneeName: true, createdAt: true },
      })
      .then((data) => data)
      .catch((error) => {
        throw new HttpException(error.name, 400);
      });
  }
}
