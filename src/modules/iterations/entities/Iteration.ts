import { Session } from '@modules/sessions/entities/Session';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from "uuid";

@Entity()
export class Iteration {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    sessionId: string;

    @Column()
    cardId: string;

    @Column()
    type: string;

    @Column()
    content: string;

    @Column()
    position: number;

    @OneToOne(() => Session)
    @JoinColumn()
    session: Session;
  
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