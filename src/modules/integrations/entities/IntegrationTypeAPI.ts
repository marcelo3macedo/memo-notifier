import { v4 as uuid } from "uuid";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity({ name: "integration_type" })
export class IntegrationTypeAPI {
   @PrimaryGeneratedColumn()
   id: string;

   @Column()
   name: string;

   @CreateDateColumn()
   createdAt: Date;

   constructor() {
      if (!this.id) {
         this.id = uuid();
      }
   }
}