import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StudentDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    class: string;

    @Column()
    city: string;



}