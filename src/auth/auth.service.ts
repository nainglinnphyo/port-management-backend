import {
  ConflictException,
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private dbService: PrismaService,
  ) {}
  async login(loginDto: LoginDto) {
    try {
      return this.dbService.user
        .findUnique({
          where: {
            username: loginDto.username,
          },
        })
        .then(async (user) => {
          const isMatch = await bcrypt.compare(
            loginDto.password,
            user.password,
          );
          if (isMatch) {
            const payload = {
              username: loginDto.username,
              password: loginDto.password,
              sub: user.id,
            };
            return {
              access_token: await this.jwtService.signAsync(payload, {
                secret: 'port',
              }),
            };
          } else {
            throw new UnauthorizedException();
          }
        })
        .catch((err) => {
          throw new UnauthorizedException();
        });
    } catch (error) {
      throw new HttpException(error.message, 500);
    }
  }

  async register(registerDto: RegisterDto) {
    const saltOrRounds = 10;
    try {
      return this.dbService.user
        .create({
          data: {
            username: registerDto.username,
            password: await bcrypt.hash(registerDto.password, saltOrRounds),
          },
        })
        .then((data) => data)
        .catch((err) => {
          throw new HttpException(err.message, 400);
        });
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
