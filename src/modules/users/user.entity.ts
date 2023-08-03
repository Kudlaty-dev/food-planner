import { Entity, Column } from 'typeorm';
import { ProjectBaseEntity } from '../base.entity';

@Entity()
export class User extends ProjectBaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
