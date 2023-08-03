import { Repository } from 'typeorm';
import { BaseRepository } from '../new.base.repository';
//import { BaseRepository } from './base.repository';
import { User } from './user.entity';
import { IRepository } from '../interface.repository';

export class UserRepository
  extends BaseRepository<User>
  implements IRepository<User>
{
  constructor(repository: Repository<User>) {
    super(repository);
  }
}
