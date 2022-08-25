import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from "uuid";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  userId: number;

  @Column()
  message: string;
  
  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    if (!this.id) {
       this.id = uuid();
    }
 }
}