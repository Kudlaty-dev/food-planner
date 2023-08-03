import { Injectable } from '@nestjs/common';
import { RecipesRepository } from './recipes.repository';
import { RecipeDto } from './dto/recipe.dto';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipesService {
  constructor(private recipesRepository: RecipesRepository) {}

  createRecipe(recipeDto: RecipeDto): Promise<Recipe> {
    return this.recipesRepository.saveRecipe(recipeDto);
  }

  findRecipes(): Promise<Recipe[]> {
    return this.recipesRepository.fetchAllRecipes();
  }

  findOneRecipe(id: string): Promise<Recipe> {
    return this.recipesRepository.findRecipeById(id);
  }

  updateRecipe(id: string, recipeDto: RecipeDto): Promise<Recipe> {
    return this.recipesRepository.saveRecipe(recipeDto, id);
  }

  removeRecipe(id: string): Promise<Recipe> {
    return this.recipesRepository.deleteRecipe(id);
  }
}
