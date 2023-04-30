import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ConsigneeService } from './consignee.service';

@Controller('consignee')
export class ConsigneeController {
  constructor(private readonly consigneeService: ConsigneeService) {}

  @Get('search/:consigneeName')
  findOne(@Param('consigneeName') consigneeName: string) {
    return this.consigneeService.findOne(consigneeName);
  }
}
