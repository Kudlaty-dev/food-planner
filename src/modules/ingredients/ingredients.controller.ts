import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  Inject,
} from '@nestjs/common';
import { IngredientDto } from './dto/ingredient.dto';
import { Ingredient } from './entity/ingredient.entity';
import { IngredientServiceInterface } from './interface/ingredient.service.interface';
import { DeleteResult } from 'typeorm';

@Controller('ingredients')
export class IngredientController {
  constructor(
    @Inject('IngredientServiceInterface')
    private readonly ingredientsService: IngredientServiceInterface,
  ) {}

  @Post()
  public async create(
    @Body() ingredientDto: IngredientDto,
  ): Promise<Ingredient> {
    console.log(ingredientDto);
    return await this.ingredientsService.create(ingredientDto);
  }

  @Get('/:id')
  public async getIngredientById(@Param('id') id: string): Promise<Ingredient> {
    return await this.ingredientsService.findOneIngredient(id);
  }

  @Get()
  public async getIngredients(): Promise<Ingredient[]> {
    return await this.ingredientsService.findIngredients();
  }

  @Patch('/:id')
  public async patchIngredient(
    @Param('id') id: string,
    @Body() ingredientDto: IngredientDto,
  ): Promise<Ingredient> {
    return await this.ingredientsService.updateIngredient(id, ingredientDto);
  }

  @Delete('/:id')
  public async deleteIngredient(
    @Param('id') id: string,
  ): Promise<DeleteResult> {
    return await this.ingredientsService.removeIngredient(id);
  }
}
