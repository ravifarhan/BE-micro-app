import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Articles } from "./Articles";

export enum UserRole {
  admin = "admin",
  user = "user",
}
export enum Gender {
  male = "male",
  female = "female",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @Column({
    type: "enum",
    nullable: true,
    enum: UserRole,
    // default: UserRole.user,
  })
  role: UserRole;

  @Column({
    type: "enum",
    nullable: true,
    enum: Gender,
  })
  gender: Gender;

  @OneToMany(() => Articles, (articles) => articles.user)
  articles: Articles[];
}
