import { Inject, Injectable } from '@nestjs/common';
import { IngredientRepository } from '../../repositories/ingredient.repository';
import { IngredientDto } from './dto/ingredient.dto';
import { Ingredient } from './entity/ingredient.entity';
import { DeleteResult } from 'typeorm';
import { IngredientServiceInterface } from './interface/ingredient.service.interface';

@Injectable()
export class IngredientService implements IngredientServiceInterface {
  constructor(
    @Inject('IngredientRepositoryInterface')
    private readonly ingredientRepository: IngredientRepository,
  ) {}

  private calculateCalories(ingredientDto: IngredientDto) {
    const { ingredientName, protein, carbs, fat } = ingredientDto;
    const data = {
      ingredientName: ingredientName,
      protein: protein,
      carbs: carbs,
      fat: fat,
      calories: protein * 4 + carbs * 4 + fat * 9,
    };
    return data;
  }

  public async create(ingredientDto: IngredientDto): Promise<Ingredient> {
    const data = this.calculateCalories(ingredientDto);
    return await this.ingredientRepository.create(data);
  }

  findOneIngredient(id: string): Promise<Ingredient> {
    return this.ingredientRepository.findOneById(id);
  }

  findIngredients(): Promise<Ingredient[]> {
    return this.ingredientRepository.findAll();
  }

  updateIngredient(
    id: string,
    ingredientDto: IngredientDto,
  ): Promise<Ingredient> {
    const data = this.calculateCalories(ingredientDto);
    return this.ingredientRepository.update(id, data);
  }

  removeIngredient(id: string): Promise<DeleteResult> {
    return this.ingredientRepository.remove(id);
  }
}
