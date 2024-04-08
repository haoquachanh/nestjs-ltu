import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('/')
  getUser() {
    return { msg: 'No infomation' };
  }

  @Post('/')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userdata: CreateUserDto) {
    console.log(userdata);
    return {};
  }
}
