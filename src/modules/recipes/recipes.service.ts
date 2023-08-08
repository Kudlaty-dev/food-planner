import { Inject, Injectable } from '@nestjs/common';
import { RecipesRepository } from '../../repositories/recipes.repository';
import { RecipeDto } from './dto/recipe.dto';
import { Recipe } from './entity/recipe.entity';
import { RecipesServiceInterface } from './interface/recipe.service.interface';
import { DeleteResult } from 'typeorm';
import { IngredientServiceInterface } from '../ingredients/interface/ingredient.service.interface';

@Injectable()
export class RecipesService implements RecipesServiceInterface {
  constructor(
    @Inject('RecipesRepositoryInterface')
    private readonly recipesRepository: RecipesRepository,
    @Inject('IngredientServiceInterface')
    private readonly ingredientsService: IngredientServiceInterface,
  ) {}

  async create(recipeDto: RecipeDto): Promise<Recipe> {
    const { title, description, ingredientIds } = recipeDto;
    const ingredientArray = ingredientIds.split(', ');
    const ingredientsArr = await this.ingredientsService.findManyByIds(
      ingredientArray,
    );
    const data = {
      title: title,
      description: description,
      ingredients: ingredientsArr,
    };
    return this.recipesRepository.create(data);
  }

  findAll(): Promise<Recipe[]> {
    this.findWithRelations();
    return this.recipesRepository.findAll();
  }

  findOneById(id: string): Promise<Recipe> {
    return this.recipesRepository.findOneById(id);
  }

  async findWithRelations() {
    const relations = {
      relations: {
        ingredients: true,
      },
    };
    const result = await this.recipesRepository.findWithRelations(relations);
    console.log(result[0]);
    console.log(result[1]);
    console.log(result);
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

// ['25e1854d-b487-4c4b-8565-e71bb3d108ca',
// '4c8d39c8-cc60-4446-84fd-c9fada192435',
// 'f405bd8c-027d-4418-b086-718d80bc7a21',
// '5e5b39fc-ccf8-4d8d-8bd9-486ddc3a58c7',
// '5e7488ce-b737-4edf-975d-64ace06c0014']
