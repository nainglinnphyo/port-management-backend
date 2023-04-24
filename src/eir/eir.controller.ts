import { Controller, Post, Body } from '@nestjs/common';
import { EirService } from './eir.service';
import { CreateEirDto } from './dto/create-eir.dto';
import { UpdateEirDto } from './dto/update-eir.dto';

@Controller('eir')
export class EirController {
  constructor(private readonly eirService: EirService) {}

  @Post()
  create(@Body() createEirDto: CreateEirDto) {
    return this.eirService.create(createEirDto);
  }
}
