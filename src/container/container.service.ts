import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateContainerDto } from './dto/container.dto';

@Injectable()
export class ContainerService {
  constructor(private dbService: PrismaService) {}

  async create(dto: CreateContainerDto) {
    try {
      return this.dbService.container
        .create({
          data: {
            containerNo: dto.containerNo,
            size: dto.size,
            containerType: dto.type,
            grade: dto.grade,
            manufacturerDate: new Date(dto.manufactureDate).toISOString(),
            oneDayCharges: parseInt(dto.oneDayCharges),
            operator: {
              connect: {
                id: dto.operatorId,
              },
            },
          },
        })
        .then((data) => data)
        .catch((error) => {
          throw new HttpException(
            error.code === 'P2002' ? 'Container No Cannot Be Duplicate' : error,
            400,
          );
        });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async findOne(containerNo: string) {
    return this.dbService.container
      .findUniqueOrThrow({
        where: { containerNo: containerNo },
        include: { operator: { select: { id: true, operatorName: true } } },
      })
      .then((data) => data)
      .catch((error) => {
        throw new HttpException(error.name, 400);
      });
  }
}
