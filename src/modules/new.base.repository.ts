import { Repository } from 'typeorm';
import { ProjectBaseEntity } from './base.entity';

export abstract class BaseRepository<T extends ProjectBaseEntity> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  //   async findById(id: number): Promise<T> {
  //     return this.repository.findOne(id);
  //   }

  async create(data: Partial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  //   async update(id: number, data: Partial<T>): Promise<T> {
  //     await this.repository.update(id, data);
  //     return this.findById(id);
  //   }

  //   async delete(id: number): Promise<void> {
  //     await this.repository.delete(id);
  //   }
}
