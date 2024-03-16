import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Articles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  description: string;

  // @ManyToOne(() => User, (user) => user.articles)
  // user: User;

  @ManyToOne(() => User, user => user.articles, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" }) // Nama kolom kunci asing di tabel Article
  user: User;
}
