import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  // @Column()
  // createdAt: any;

  // @Column()
  // updatedAt: any;

  //   @BeforeInsert()
  //   async hashPassword() {
  //     this.password = await hashSync(this.password, genSaltSync(10));
  //   }
}
