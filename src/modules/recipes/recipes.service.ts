import { Inject, Injectable } from '@nestjs/common';
import { RecipesRepository } from '../../repositories/recipes.repository';
import { RecipeDto } from './dto/recipe.dto';
import { Recipe } from './entity/recipe.entity';
import { RecipesServiceInterface } from './interface/recipe.service.interface';
import { DeleteResult } from 'typeorm';

@Injectable()
export class RecipesService implements RecipesServiceInterface {
  constructor(
    @Inject('RecipesRepositoryInterface')
    private readonly recipesRepository: RecipesRepository,
  ) {}

  create(recipeDto: RecipeDto): Promise<Recipe> {
    return this.recipesRepository.create(recipeDto);
  }

  findAll(): Promise<Recipe[]> {
    return this.recipesRepository.findAll();
  }

  findOneById(id: string): Promise<Recipe> {
    return this.recipesRepository.findOneById(id);
  }

  update(id: string, recipeDto: RecipeDto): Promise<Recipe> {
    const { title, description } = recipeDto;
    const data = {
      id: id,
      title: title,
      description: description,
    };
    return this.recipesRepository.update(id, data);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.recipesRepository.remove(id);
  }
}
