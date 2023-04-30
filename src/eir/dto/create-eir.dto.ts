import { IsNotEmpty, IsString } from 'class-validator';
export class CreateGateInDto {
  @IsNotEmpty()
  @IsString()
  eirNo: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
