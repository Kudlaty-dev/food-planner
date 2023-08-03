import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientDto } from './dto/ingredient.dto';
import { Ingredient } from './ingredient.entity';

@Controller('ingredients')
export class IngredientsController {
  constructor(private ingredientsService: IngredientsService) {}

  // @Post()
  // createIngredient(@Body() ingredientDto: IngredientDto): Promise<Ingredient> {
  //   return this.ingredientsService.createIngredient(ingredientDto);
  // }

  // @Get()
  // getIngredients(): Promise<Ingredient[]> {
  //   return this.ingredientsService.findIngredients();
  // }
  // @Get('/:id')
  // getIngredientById(@Param('id') id: string): Promise<Ingredient> {
  //   return this.ingredientsService.findOneIngredient(id);
  // }

  // @Patch('/:id')
  // patchIngredient(
  //   @Param('id') id: string,
  //   @Body() ingredientDto: IngredientDto,
  // ): Promise<Ingredient> {
  //   return this.ingredientsService.updateIngredient(id, ingredientDto);
  // }

  // @Delete('/:id')
  // deleteIngredient(@Param('id') id: string): Promise<Ingredient> {
  //   return this.ingredientsService.removeIngredient(id);
  // }
}
