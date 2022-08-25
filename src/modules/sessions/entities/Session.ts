import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import { v4 as uuid } from "uuid";

@Entity()
export class Session {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   userId: string;
  
   @CreateDateColumn()
   createdAt: Date;

   @DeleteDateColumn()
   deletedAt: Date;

   constructor() {
      if (!this.id) {
         this.id = uuid();
      }
   }
}