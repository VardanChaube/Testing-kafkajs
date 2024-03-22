import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentdetailService } from './studentdetail.service';
import { StudentDetail } from './student-details.entity';
import { StudentDetailsDto } from './dto/student-details.dto';
import { UpdateStudentDetailsDto } from './dto/update-student-details.dto';

@Controller('studentdetail')
export class StudentdetailController {
    constructor(private studentdetailService: StudentdetailService) { }

    @Get()
    async getAllStudents(): Promise<StudentDetail[]> {
        return this.studentdetailService.findAll();
    }

    @Post()
    async createStudent(@Body() body: StudentDetailsDto): Promise<StudentDetail> {
        return this.studentdetailService.create(body);
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<StudentDetail> {
        return await this.studentdetailService.findOne(id);
    }

    @Put(':id')
    async updateById(@Param('id') id: number, @Body() body: UpdateStudentDetailsDto): Promise<StudentDetail> {
        return await this.studentdetailService.update(id, body);
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: number): Promise<StudentDetail> {
        return await this.studentdetailService.remove(id);
    }



}
