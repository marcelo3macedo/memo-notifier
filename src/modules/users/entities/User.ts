import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from "uuid";

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   key: string;

   @Column()
   channelType: string;

   @Column()
   externalId: string;
  
   @CreateDateColumn()
   createdAt: Date;

   constructor() {
      if (!this.id) {
         this.id = uuid();
      }
   }
}