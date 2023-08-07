import { Inject, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserRepositoryInterface } from './interface/user.repository.interface';
import { UserServiceInterface } from './interface/user.service.interface';
import { UserDto } from './dto/user.dto';
import { BaseAbstractRepository } from 'src/repositories/base/base.abstract.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { DeleteResult } from 'typeorm';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(
    @Inject('UserRepositoryInterface')
    private readonly userRepository: UserRepository,
  ) {}

  public async create(userDto: UserDto): Promise<User> {
    const user = new User();
    user.email = userDto.email;
    user.name = userDto.name;
    user.password = userDto.password;
    return await this.userRepository.create(user);
  }

  public async findAll(): Promise<User[]> {
    this.userRepository.print();
    return await this.userRepository.findAll();
  }

  public async findOneById(id): Promise<User> {
    return await this.userRepository.findOneById(id);
  }

  // To be worked on later
  // public async findWithCondition(id): Promise<User> {
  //   const filterCondition = { id: id };
  //   return await this.userRepository.findByCondition(filterCondition);
  // }

  public async update(id, userDto: UserDto): Promise<User> {
    const { email, name } = userDto;
    const data = {
      id: id,
      email: email,
      name: name,
    };
    return await this.userRepository.update(id, data);
  }

  public async remove(id: string): Promise<DeleteResult> {
    return await this.userRepository.remove(id);
  }
}
