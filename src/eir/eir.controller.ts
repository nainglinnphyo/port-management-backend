import { Controller, Post, Body } from '@nestjs/common';
import { EirService } from './eir.service';
import { CreateGateInDto } from './dto/create-eir.dto';
import { UpdateEirDto } from './dto/update-eir.dto';

@Controller('eir')
export class EirController {
  constructor(private readonly eirService: EirService) {}

  @Post('gate-in')
  createGateIn(@Body() dto: CreateGateInDto) {
    return this.eirService.createGateIn(dto);
  }
}
