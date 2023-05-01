import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateGateInDto } from './dto/create-eir.dto';
import { UpdateEirDto } from './dto/update-eir.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EirService {
  constructor(private dbService: PrismaService) {}
  async createGateIn(dto: CreateGateInDto) {
    const operator = await this.dbService.operator.findFirst({
      where: { operatorName: dto.operatorName },
    });
    const vehicleInfo = await this.dbService.gateInvehicleInfo.create({
      data: {
        driverName: dto.driverName,
        licenseNo: dto.licenseNo,
        vehicleNo: dto.vehicleNo,
      },
    });
    if (!operator || !vehicleInfo)
      throw new NotFoundException('Operator or Vehicle Not Found');
    return this.dbService.eir
      .create({
        data: {
          eirNo: dto.eirNo,
          billingStatus: dto.billingStatus,
          containerId: dto.container,
          grossWeight: dto.grossWeight,
          tareWeight: dto.tareWeight,
          netWeight: dto.netWeight,
          liftOffCharges: dto.liftOffCharges,
          inDate: new Date(),
          outDate: null,
          consigneeId: dto.consigneeId,
          operatorId: operator.id,
          gateInvehicleInfoId: vehicleInfo.id,
          remark: dto.remark,
          washingCharges: dto.washingCharges,
          washingStatus: dto.washingStatus,
        },
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        if (err.code === 'P2002')
          throw new ConflictException('Eir No Cannot Be Duplicated');
      });
  }

  async fetchGateIn(query: { page: any; pageSize: any }) {
    const take = query.pageSize;
    const skip = (query.page - 1) * take;
    return this.dbService.eir
      .findMany({
        where: {
          status: 'GATE_IN',
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: parseInt(take, 10),
        skip: skip,
        select: {
          id: true,
          eirNo: true,
          inDate: true,
          container: {
            select: {
              containerNo: true,
              containerType: true,
              manufacturerDate: true,
              size: true,
            },
          },
          operator: {
            select: {
              operatorName: true,
            },
          },
          vessel: true,
          voyage: true,
          consignee: {
            select: {
              consigneeName: true,
            },
          },
          grossWeight: true,
          tareWeight: true,
          netWeight: true,
          washingStatus: true,
          washingCharges: true,
          standard: true,
          grade: true,
          gateInvehicleInfo: {
            select: {
              driverName: true,
              licenseNo: true,
              vehicleNo: true,
            },
          },
        },
      })
      .then(async (data: any) => {
        return {
          total: await this.dbService.eir.count({
            where: { status: 'GATE_IN' },
          }),
          data: data,
          page: query.page,
          per_page: query.pageSize,
        };
      });
  }
}
