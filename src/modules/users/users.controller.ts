import {
  Body,
  Controller,
  Inject,
  Post,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserServiceInterface } from './interface/user.service.interface';
import { UserDto } from './dto/user.dto';
import { DeleteResult } from 'typeorm';

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

  @Get('/:id/')
  public async getById(@Param('id') id: string): Promise<User> {
    return await this.userService.findOneById(id);
  }

  @Patch('/:id/')
  public async update(
    @Param('id') id: string,
    @Body() userDto: UserDto,
  ): Promise<User> {
    return await this.userService.update(id, userDto);
  }

  @Delete('/:id/')
  public async delete(@Param('id') id: string): Promise<DeleteResult> {
    return await this.userService.remove(id);
  }
}
