import { PartialType } from '@nestjs/mapped-types';
import { CreateEirDto } from './create-eir.dto';

export class UpdateEirDto extends PartialType(CreateEirDto) {}
