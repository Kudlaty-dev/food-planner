import { BaseInterfaceRepository } from '../../../repositories/base/base.interface.repository';
import { Ingredient } from '../entity/ingredient.entity';

export interface IngredientRepositoryInterface
  extends BaseInterfaceRepository<Ingredient> {
  customIngredientFunction(): void;
}
