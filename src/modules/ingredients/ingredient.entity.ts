import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProjectBaseEntity } from '../base.entity';

@Entity()
export class Ingredient extends ProjectBaseEntity {
  @Column()
  ingredientName: string;

  @Column()
  protein: number;

  @Column()
  carbs: number;

  @Column()
  fat: number;

  @Column()
  calories: number;
}
