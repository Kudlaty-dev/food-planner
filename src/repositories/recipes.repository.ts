import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Recipe } from '../modules/recipes/entity/recipe.entity';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { RecipesRepositoryInterface } from 'src/modules/recipes/interface/recipe.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RecipesRepository
  extends BaseAbstractRepository<Recipe>
  implements RecipesRepositoryInterface
{
  constructor(
    @InjectRepository(Recipe)
    private readonly recipesRepository: Repository<Recipe>,
  ) {
    super(recipesRepository);
  }

  customRecipeFunction(): void {
    console.log('Placeholder');
  }
}
