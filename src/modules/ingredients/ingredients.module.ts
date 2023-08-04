import { Module } from '@nestjs/common';
import { IngredientsController } from './ingredients.controller';
import { IngredientsService } from './ingredients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './ingredient.entity';
import { IngredientsRepository } from './ingredients.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  controllers: [IngredientsController],
  providers: [IngredientsService, IngredientsRepository],
})
export class IngredientsModule {}
