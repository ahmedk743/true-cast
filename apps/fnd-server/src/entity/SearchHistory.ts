import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity("search-history")
export class SearchHistory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  headline: string;

  @ManyToOne(() => User, (u) => u.history)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
