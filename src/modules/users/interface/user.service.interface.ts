import { User } from '../entity/user.entity';
import { UserDto } from '../dto/user.dto';
import { DeleteResult } from 'typeorm';

export interface UserServiceInterface {
  create(userDto: UserDto): Promise<User>;
  findAll(): Promise<User[]>;
  findOneById(id): Promise<User>;
  //findWithCondition(id): Promise<User>; to be implemented later
  update(id, userDto: UserDto): Promise<User>;
  remove(id): Promise<DeleteResult>;
}
