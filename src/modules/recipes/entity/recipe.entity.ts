import { Ingredient } from 'src/modules/ingredients/entity/ingredient.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToMany(() => Ingredient, { eager: false })
  @JoinTable()
  ingredients: Ingredient[];
}
