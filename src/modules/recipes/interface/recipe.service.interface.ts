import { DeleteResult } from 'typeorm';
import { RecipeDto } from '../dto/recipe.dto';
import { Recipe } from '../entity/recipe.entity';

export interface RecipesServiceInterface {
  create(RecipeDto: RecipeDto): Promise<Recipe>;
  findAll(): Promise<Recipe[]>;
  findOneById(id): Promise<Recipe>;
  //findWithCondition(id): Promise<Recipe>; to be implemented later
  update(id, RecipeDto: RecipeDto): Promise<Recipe>;
  remove(id): Promise<DeleteResult>;
}
