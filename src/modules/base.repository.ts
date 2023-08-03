import { Injectable } from '@nestjs/common';
import { BaseEntity, DataSource, In, Repository } from 'typeorm';
//import { Ingredient } from './ingredient.entity';
import { IngredientDto } from './ingredients/dto/ingredient.dto';
import { v4 as uuid } from 'uuid';
//import { BaseRepository } from '../base.repository';
import { BaseInterfaceRepository } from './base.interface.repository';
import { Ingredient } from './ingredients/ingredient.entity';
import { ProjectBaseEntity } from './base.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
//implements BaseInterfaceRepository<T>
// export class BaseIngredientsRepository<T> extends Repository<T> {
//   constructor(private dataSource: DataSource) {
//     super(Ingredient, dataSource.createEntityManager());
//   }

// THIS WORKED

// export class BaseIngredientsRepository<T> extends Repository<T> {
//     constructor(private dataSource: DataSource) {
//       super(Ingredient, dataSource.createEntityManager());
//     }
export class BaseIngredientsRepository<T> {
  constructor(
    @InjectRepository(Ingredient)
    private baseRepo: Repository<T>,
  ) {}

  async findAll(): Promise<T[]> {
    console.log(Repository<T>);
    console.log('Base repo');
    return await this.baseRepo.find();
  }
}

// import { Injectable } from '@nestjs/common';
// import { DataSource, Repository } from 'typeorm';
// import { ProjectBaseEntity } from './base.entity';
// import { BaseInterfaceRepository } from './base.interface.repository';

// // export abstract class BaseRepository<T extends ProjectBaseEntity> {
// //   constructor(private readonly repository: Repository<T>) {}

// export abstract class BaseRepository<T extends ProjectBaseEntity>
//   implements BaseInterfaceRepository<T>
// {
//   constructor(private dataSource: DataSource) {
//     this.dataSource = dataSource.createEntityManager();
//   }
//   //constructor(private repository: Repository<T>) {}

//   async findAll(): Promise<T[]> {
//     console.log('Base repository at work');
//     return this.repo.find();
//   }
// }

// export class IngredientsRepository extends BaseRepository<Ingredient> {
//   constructor(private dataSource: DataSource) {
//     super(Ingredient, dataSource.createEntityManager());
//   }

// @Injectable()
// export abstract class BaseRepository extends Repository<T> {
//   constructor(private dataSource: DataSource) {
//     super(<T>, dataSource.createEntityManager());
//   }

// }
