import { Injectable } from '@nestjs/common';
import { IngredientsRepository } from './ingredients.repository';
import { IngredientDto } from './dto/ingredient.dto';
import { Ingredient } from './ingredient.entity';

@Injectable()
export class IngredientsService {
  constructor(private ingredientsRepository: IngredientsRepository) {}

  //   createIngredient(ingredientDto: IngredientDto): Promise<Ingredient> {
  //     return this.ingredientsRepository.saveIngredient(ingredientDto);
  //   }

  //   findIngredients(): Promise<Ingredient[]> {
  //     return this.ingredientsRepository.findAllIngredients();
  //   }

  //   findOneIngredient(id: string): Promise<Ingredient> {
  //     return this.ingredientsRepository.findIngredientById(id);
  //   }

  //   updateIngredient(
  //     id: string,
  //     ingredientDto: IngredientDto,
  //   ): Promise<Ingredient> {
  //     return this.ingredientsRepository.saveIngredient(ingredientDto, id);
  //   }

  //   removeIngredient(id: string): Promise<Ingredient> {
  //     return this.ingredientsRepository.deleteIngredient(id);
  //   }
}
