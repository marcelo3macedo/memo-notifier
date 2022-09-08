import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from "uuid";
import { Iteration } from './Iteration';

@Entity()
export class IterationOption {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    iterationId: string;

    @Column()
    slug: string;

    @Column()
    content: string;

    @Column()
    position: number;

    @OneToOne(() => Iteration)
    @JoinColumn()
    iteration: Iteration;
  
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