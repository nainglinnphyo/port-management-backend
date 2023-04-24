import { Injectable } from '@nestjs/common';
import { CreateEirDto } from './dto/create-eir.dto';
import { UpdateEirDto } from './dto/update-eir.dto';

@Injectable()
export class EirService {
  create(createEirDto: CreateEirDto) {
    return 'This action adds a new eir';
  }
}
