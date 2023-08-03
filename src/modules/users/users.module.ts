import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from '../ingredients/ingredient.entity';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UsersModule {}
