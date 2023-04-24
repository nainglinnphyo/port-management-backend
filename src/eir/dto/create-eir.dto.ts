import { IsNotEmpty, IsString } from 'class-validator';
export class CreateEirDto {
  @IsNotEmpty()
  @IsString()
  eirNo: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
