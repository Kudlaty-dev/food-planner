import { BaseEntity } from 'typeorm';

//export interface BaseInterfaceRepository<T extends BaseEntity> {
import { Ingredient } from './ingredients/ingredient.entity';
export interface BaseInterfaceRepository<T> {
  findAll(): Promise<T[]>;
}
