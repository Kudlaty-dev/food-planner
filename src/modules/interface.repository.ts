import { ProjectBaseEntity } from './base.entity';

export interface IRepository<T extends ProjectBaseEntity> {
  findAll(): Promise<T[]>;
  //   findById(id: string): Promise<T>;
  //create(data: Partial<T>): Promise<T>;
  create(data: T | any): Promise<T>;
  //   update(id: string, data: Partial<T>): Promise<T>;
  //   delete(id: string): Promise<void>;
}
