import { StudentDetail } from "src/studentdetail/student-details.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Marks {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    English: number;

    @Column()
    Hindi: number;

    @Column()
    Maths: number;

    @Column()
    Science: number;

    @Column()
    SocialScience: number;

    @Column()
    studentDetailId: number;
}