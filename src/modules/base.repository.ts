import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ProjectBaseEntity } from './base.entity';

export abstract class BaseRepository<T extends ProjectBaseEntity> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    console.log('Base repository at work');
    return this.repository.find();
  }
}

// @Injectable()
// export abstract class BaseRepository extends Repository<T> {
//   constructor(private dataSource: DataSource) {
//     super(<T>, dataSource.createEntityManager());
//   }

// }
