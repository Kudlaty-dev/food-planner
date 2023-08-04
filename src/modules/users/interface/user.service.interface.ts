import { User } from '../entity/user.entity';
import { UserDto } from '../dto/user.dto';

export interface UserServiceInterface {
  create(userDto: UserDto): Promise<User>;
  findAll(): Promise<User[]>;
  update(id, userDto: UserDto): Promise<User>;
}
