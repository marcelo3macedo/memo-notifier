import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from "uuid";

@Entity({ name: "users" })
export class UserAPI {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   name: string;

   @Column()
   email: string;

   @CreateDateColumn()
   createdAt: Date;

   constructor() {
      if (!this.id) {
         this.id = uuid();
      }
   }
}