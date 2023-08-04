import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: string;

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
