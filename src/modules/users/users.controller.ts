import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  //   @Get(':id')
  //   async findById(@Param('id') id: string): Promise<User> {
  //     return this.userService.findById(id);
  //   }

  @Post()
  async create(@Body() data: Partial<User>): Promise<User> {
    return this.userService.create(data);
  }

  //   @Put(':id')
  //   async update(@Param('id') id: string, @Body() data: Partial<User>): Promise<User> {
  //     return this.userService.update(id, data);
  //   }

  //   @Delete(':id')
  //   async delete(@Param('id') id: string): Promise<void> {
  //     return this.userService.delete(id);
  //   }
}
