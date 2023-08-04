import { Inject, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserRepositoryInterface } from './interface/user.repository.interface';
import { UserServiceInterface } from './interface/user.service.interface';
import { UserDto } from './dto/user.dto';
import { BaseAbstractRepository } from 'src/repositories/base/base.abstract.repository';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepository, //private readonly userRepository: BaseAbstractRepository<User>, //UserRepositoryInterface,
  ) {}

  public async create(userDto: UserDto): Promise<User> {
    const user = new User();
    user.email = userDto.email;
    user.password = userDto.password;
    return await this.userRepository.create(user);
  }

  public async findAll(): Promise<User[]> {
    this.userRepository.print();
    return await this.userRepository.findAll();
  }

  public async update(id, userDto): Promise<User> {
    return await this.userRepository.update(id, userDto);
  }
}
