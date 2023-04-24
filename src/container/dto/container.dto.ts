import { CONTAINER_TYPE } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateContainerDto {
  @IsNotEmpty()
  @IsString()
  containerNo: string;

  @IsNotEmpty()
  @IsString()
  operatorId: string;

  @IsNotEmpty()
  @IsString()
  manufactureDate: string;

  @IsNotEmpty()
  @IsString()
  size: string;

  @IsNotEmpty()
  @IsString()
  type: CONTAINER_TYPE;

  @IsNotEmpty()
  @IsString()
  grade: string;

  @IsNotEmpty()
  oneDayCharges: string;

  @IsString()
  remark: string;
}
