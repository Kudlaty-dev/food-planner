import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipeDto } from './dto/recipe.dto';
import { Recipe } from './recipe.entity';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Post()
  postRecipe(@Body() recipeDto: RecipeDto): Promise<Recipe> {
    return this.recipesService.createRecipe(recipeDto);
  }

  @Get()
  getRecipes(): Promise<Recipe[]> {
    return this.recipesService.findRecipes();
  }
  @Get('/:id')
  getRecipeById(@Param('id') id: string): Promise<Recipe> {
    return this.recipesService.findOneRecipe(id);
  }

  @Patch('/:id')
  patchRecipe(
    @Param('id') id: string,
    @Body() recipeDto: RecipeDto,
  ): Promise<Recipe> {
    return this.recipesService.updateRecipe(id, recipeDto);
  }

  @Delete('/:id')
  deleteRecipe(@Param('id') id: string): Promise<Recipe> {
    return this.recipesService.removeRecipe(id);
  }
}
