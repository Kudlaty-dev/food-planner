import { DeleteResult } from 'typeorm';
import { IngredientDto } from '../dto/ingredient.dto';
import { Ingredient } from '../entity/ingredient.entity';

export interface IngredientServiceInterface {
  create(ingredientDto: IngredientDto): Promise<Ingredient>;
  findOneIngredient(id: string): Promise<Ingredient>;
  findIngredients(): Promise<Ingredient[]>;
  updateIngredient(
    id: string,
    ingredientDto: IngredientDto,
  ): Promise<Ingredient>;
  removeIngredient(id): Promise<DeleteResult>;
}
