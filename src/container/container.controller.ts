import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateContainerDto } from './dto/container.dto';
import { ContainerService } from './container.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('container')
export class ContainerController {
  constructor(private containerService: ContainerService) {}
  
  @Post('create')
  @UseGuards(AuthGuard)
  @HttpCode(201)
  async createContainer(@Body() createContainerDto: CreateContainerDto) {
    return this.containerService.create(createContainerDto);
  }

  @UseGuards(AuthGuard)
  @Get(':containerNo')
  @HttpCode(200)
  async findOne(@Param('containerNo') containerNo: string) {
    return this.containerService.findOne(containerNo);
  }
}
