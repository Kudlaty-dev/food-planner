import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UsersController } from './users.controller';
import { UserRepository } from '../../repositories/user.repository';
import { UserRepositoryInterface } from './interface/user.repository.interface';
import { UserService } from './users.service';
import { UserServiceInterface } from './interface/user.service.interface';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: 'UserRepositoryInterface',
      useClass: UserRepository,
    },
    {
      provide: 'UserServiceInterface',
      useClass: UserService,
    },
    UserRepository,
  ],
  controllers: [UsersController],
})
export class UserModule {}
