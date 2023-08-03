import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Recipe } from './recipe.entity';
import { RecipeDto } from './dto/recipe.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class RecipesRepository extends Repository<Recipe> {
  constructor(private dataSource: DataSource) {
    super(Recipe, dataSource.createEntityManager());
  }

  async saveRecipe(recipeDto: RecipeDto, id?: string): Promise<Recipe> {
    if (!id) {
      id = uuid();
    }
    const { title, description } = recipeDto;
    const recipe = this.create({
      id,
      title,
      description,
    });
    return await this.save(recipe);
  }

  async fetchAllRecipes(): Promise<Recipe[]> {
    return await this.find();
  }

  async findRecipeById(id: string): Promise<Recipe> {
    return await this.findOneBy({ id: id });
  }

  async deleteRecipe(id: string): Promise<Recipe> {
    const recipe = await this.findOneBy({ id: id });
    await this.delete(recipe);
    return recipe;
  }
}
