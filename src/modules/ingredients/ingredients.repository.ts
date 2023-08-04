import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { IngredientDto } from './dto/ingredient.dto';
import { v4 as uuid } from 'uuid';
//import { BaseRepository } from '../base.repository';

import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class IngredientsRepository extends Repository<Ingredient> {
  constructor(private dataSource: DataSource) {
    super(Ingredient, dataSource.createEntityManager());
  }

  async findAllIngredients(): Promise<Ingredient[]> {
    return await this.find();
  }
}

//   async findAllIngredients(): Promise<Ingredient[]> {
//     return await this.find();
//   }
// }

// async saveIngredient(ingredientDto: IngredientDto, id?: string) {
//   if (!id) {
//     id = uuid();
//   }
//   const { ingredientName, protein, carbs, fat } = ingredientDto;
//   const calories = protein * 4 + carbs * 4 + fat * 9;
//   const ingredient = this.create({
//     id,
//     ingredientName,
//     protein,
//     carbs,
//     fat,
//     calories,
//   });
//   return await this.save(ingredient);
// }

// async findIngredientById(id: string): Promise<Ingredient> {
//   return await this.findOneBy({ id: id });
// }

// async deleteIngredient(id: string): Promise<Ingredient> {
//   const recipe = await this.findOneBy({ id: id });
//   await this.delete(recipe);
//   return recipe;
// }

// createIngredient(ingredientDto: IngredientDto): Promise<Ingredient> {
//   return this.ingredientsRepository.saveIngredient(ingredientDto);
// }

//   findAllIngredients(): Promise<Ingredient[]> {
//     console.log('repo');
//     return this.baseRepo.findAll();
//   }
