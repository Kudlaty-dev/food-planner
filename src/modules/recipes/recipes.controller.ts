import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipeDto } from './dto/recipe.dto';
import { Recipe } from './entity/recipe.entity';
import { DeleteResult } from 'typeorm';

@Controller('recipes')
export class RecipesController {
  constructor(
    @Inject('RecipesServiceInterface')
    private recipesService: RecipesService,
  ) {}

  @Post()
  postRecipe(@Body() recipeDto: RecipeDto): Promise<Recipe> {
    return this.recipesService.create(recipeDto);
  }

  @Get()
  getRecipes(): Promise<Recipe[]> {
    return this.recipesService.findAll();
  }
  @Get('/:id')
  getRecipeById(@Param('id') id: string): Promise<Recipe> {
    return this.recipesService.findOneById(id);
  }

  @Patch('/:id')
  patchRecipe(
    @Param('id') id: string,
    @Body() recipeDto: RecipeDto,
  ): Promise<Recipe> {
    return this.recipesService.update(id, recipeDto);
  }

  @Delete('/:id')
  deleteRecipe(@Param('id') id: string): Promise<DeleteResult> {
    return this.recipesService.remove(id);
  }
}
