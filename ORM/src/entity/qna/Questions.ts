import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Questions {
    @PrimaryGeneratedColumn('increment')
    questionID: number;

    @Column()
    question: string;

    @Column()
    askedTo: string;

    @Column({ nullable: true })
    askedBy: string;

    @Column()
    askedOn: Date;

    @Column({ default: false })
    answered: boolean;
}