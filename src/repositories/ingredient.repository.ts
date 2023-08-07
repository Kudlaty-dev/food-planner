import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
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
}
