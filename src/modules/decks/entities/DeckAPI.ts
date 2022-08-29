import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import { v4 as uuid } from "uuid";

@Entity({ name: "decks" })
export class DeckAPI {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   name: string;

   @Column()
   description: string;
  
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