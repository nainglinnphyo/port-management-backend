import { Injectable } from '@nestjs/common';
import { CreateGateInDto } from './dto/create-eir.dto';
import { UpdateEirDto } from './dto/update-eir.dto';

@Injectable()
export class EirService {
  createGateIn(dto: CreateGateInDto) {
    return 'This action adds a new eir';
  }
}
