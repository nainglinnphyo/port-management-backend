import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { AuthGuard } from './auth.guard';
import { PrismaService } from 'src/prisma.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly dbService: PrismaService,
  ) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto) {
    console.log(loginDto);

    return this.authService.login(loginDto);
  }

  @Post('register')
  @HttpCode(201)
  async register(@Body() regsiterDto: RegisterDto) {
    return this.authService.register(regsiterDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return this.dbService.user.findUnique({ where: { id: req.user.sub } });
  }
}
