import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { RecipesRepository } from '../../repositories/recipes.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './entity/recipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],

  providers: [
    {
      provide: 'RecipesRepositoryInterface',
      useClass: RecipesRepository,
    },
    {
      provide: 'RecipesServiceInterface',
      useClass: RecipesService,
    },
  ],
  controllers: [RecipesController],
})
export class RecipesModule {}
