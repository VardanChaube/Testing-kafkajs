import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDetail } from './student-details.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentdetailService {
    constructor(
        @InjectRepository(StudentDetail)
        private repo: Repository<StudentDetail>,
    ) { }

    async findAll(): Promise<StudentDetail[]> {
        return await this.repo.find();
    }

    create(studentDetail: StudentDetail): Promise<StudentDetail> {
        const studentObj = this.repo.create({
            name: studentDetail.name,
            class: studentDetail.class,
            city: studentDetail.city,
        });
        return this.repo.save(studentObj);
    }

    async findOne(id: number): Promise<StudentDetail> {

        const studentDetail = await this.repo.findOne(
            {
                where: {
                    id: id,
                }
            }
        );
        if (!studentDetail) {
            throw new NotFoundException('Student Not Found.')
        }
        return studentDetail;
    }

    async update(id: number, body: StudentDetail): Promise<StudentDetail> {
        const studentDetail = await this.repo.findOne(
            {
                where: {
                    id: id,
                }
            }
        );
        if (!studentDetail) {
            throw new NotFoundException('Student Not Found.')
        }
        Object.assign(studentDetail, body);

        return this.repo.save(studentDetail);

    }

    async remove(id: number): Promise<StudentDetail> {

        const studentDetail = await this.repo.findOne(
            {
                where: {
                    id: id,
                }
            }
        );
        if (!studentDetail) {
            throw new NotFoundException('Student Not Found.')
        }
        return this.repo.remove(studentDetail);
    }
}
