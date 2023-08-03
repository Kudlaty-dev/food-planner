import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { RecipesRepository } from './recipes.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  controllers: [RecipesController],
  providers: [RecipesRepository, RecipesService],
})
export class RecipesModule {}
