import { EIR_BILLING_STATUS } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class CreateGateInDto {
  @IsNotEmpty()
  @IsString()
  eirNo: string;

  @IsNotEmpty()
  @IsNumber()
  grossWeight: number;

  @IsNotEmpty()
  @IsNumber()
  tareWeight: number;

  @IsNotEmpty()
  @IsNumber()
  netWeight: number;

  @IsNotEmpty()
  @IsString()
  driverName: string;

  @IsNotEmpty()
  @IsString()
  licenseNo: string;

  @IsNotEmpty()
  @IsNumber()
  washingCharges: number;

  @IsNotEmpty()
  @IsString()
  washingStatus: string;

  @IsNotEmpty()
  @IsNumber()
  liftOffCharges: number;

  @IsString()
  standard: string;

  @IsString()
  grade: string;

  @IsNotEmpty()
  @IsString()
  billingStatus: EIR_BILLING_STATUS;

  @IsNotEmpty()
  @IsString()
  consigneeId: string;

  @IsString()
  remark: string;

  @IsNotEmpty()
  @IsString()
  container: string;

  @IsNotEmpty()
  @IsString()
  operatorName: string;

  @IsNotEmpty()
  @IsString()
  vehicleNo: string;
}
