import {
  Body,
  Controller,
  Inject,
  Post,
  Get,
  Patch,
  Param,
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserServiceInterface } from './interface/user.service.interface';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('UserServiceInterface')
    private readonly userService: UserServiceInterface,
  ) {}

  @Post()
  public async create(@Body() userDto: UserDto): Promise<User> {
    return await this.userService.create(userDto);
  }
  @Get()
  public async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Patch('/:id/')
  public async update(
    @Param('id') id: string,
    @Body() userDto: UserDto,
  ): Promise<User> {
    return await this.userService.update(id, userDto);
  }
}
