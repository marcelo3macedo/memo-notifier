import { v4 as uuid } from "uuid";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity({ name: "integration" })
export class IntegrationAPI {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   typeId: string;

   @Column()
   externalId: string;

   @Column()
   externalName: string;

   @CreateDateColumn()
   createdAt: Date;

   constructor() {
      if (!this.id) {
         this.id = uuid();
      }
   }
}