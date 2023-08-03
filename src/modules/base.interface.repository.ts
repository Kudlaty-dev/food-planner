import { BaseEntity } from 'typeorm';

export interface BaseInterfaceRepository<T extends BaseEntity> {
  findAll(): Promise<T[]>;
}
