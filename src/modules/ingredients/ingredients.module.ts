import { Module } from '@nestjs/common';
import { IngredientController } from './ingredients.controller';
import { IngredientService } from './ingredient.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './entity/ingredient.entity';
import { IngredientRepository } from '../../repositories/ingredient.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  controllers: [IngredientController],
  providers: [
    {
      provide: 'IngredientRepositoryInterface',
      useClass: IngredientRepository,
    },
    {
      provide: 'IngredientServiceInterface',
      useClass: IngredientService,
    },
  ],
})
export class IngredientsModule {}
