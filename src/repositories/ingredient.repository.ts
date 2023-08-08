import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { Ingredient } from '../modules/ingredients/entity/ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseAbstractRepository } from 'src/repositories/base/base.abstract.repository';
import { IngredientRepositoryInterface } from '../modules/ingredients/interface/ingredient.repository.interface';

@Injectable()
export class IngredientRepository
  extends BaseAbstractRepository<Ingredient>
  implements IngredientRepositoryInterface
{
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<Ingredient>,
  ) {
    super(ingredientRepository);
  }

  customIngredientFunction(): void {
    console.log('custom function');
  }

  // async findManyIngredients(): Promise<any> {
  //   console.log(Repository<Ingredient>);
  //   const condition = [
  //     '25e1854d-b487-4c4b-8565-e71bb3d108ca',
  //     '4c8d39c8-cc60-4446-84fd-c9fada192435',
  //     'f405bd8c-027d-4418-b086-718d80bc7a21',
  //     '5e5b39fc-ccf8-4d8d-8bd9-486ddc3a58c7',
  //     '5e7488ce-b737-4edf-975d-64ace06c0014',
  //   ];
  //   const query = this.ingredientRepository
  //     .createQueryBuilder()
  //     .where('id IN (:...ids)', { ids: condition });
  //   const ings = await query.getMany();
  //   console.log(ings);
  // }
}
