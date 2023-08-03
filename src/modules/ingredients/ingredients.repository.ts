import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Ingredient } from './ingredient.entity';
import { IngredientDto } from './dto/ingredient.dto';
import { v4 as uuid } from 'uuid';
import { BaseRepository } from '../base.repository';

@Injectable()
export class IngredientsRepository extends BaseRepository<Ingredient> {
  constructor(private dataSource: DataSource) {
    super(Ingredient, dataSource.createEntityManager());
  }

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

  // async findAllIngredients(): Promise<Ingredient[]> {
  //   return await this.find();
  // }

  // async findIngredientById(id: string): Promise<Ingredient> {
  //   return await this.findOneBy({ id: id });
  // }

  // async deleteIngredient(id: string): Promise<Ingredient> {
  //   const recipe = await this.findOneBy({ id: id });
  //   await this.delete(recipe);
  //   return recipe;
  // }
}
