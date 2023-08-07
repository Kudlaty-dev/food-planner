import { BaseInterfaceRepository } from 'src/repositories/base/base.interface.repository';
import { Recipe } from '../entity/recipe.entity';

export interface RecipesRepositoryInterface
  extends BaseInterfaceRepository<Recipe> {
  customRecipeFunction(): void;
}
