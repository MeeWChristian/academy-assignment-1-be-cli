import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Answers {
    @PrimaryGeneratedColumn('increment')
    answerID: number;

    @Column({ unique: true })
    answeredQuestionID: number;

    @Column({ nullable: true })
    answer: string;

    @Column()
    answeredOn: Date;
}