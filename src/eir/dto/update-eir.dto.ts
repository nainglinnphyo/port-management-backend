import { PartialType } from '@nestjs/mapped-types';
import { CreateGateInDto } from './create-eir.dto';

export class UpdateEirDto extends PartialType(CreateGateInDto) {}
