import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarksService } from './marks.service';
import { Marks } from './marks.entity';
import { CreateMarksDto } from './dtos/create-marks.dto';

@Controller('marks')
export class MarksController {
    constructor(private marksService: MarksService) { }

    @Get()
    async getAllMarks(): Promise<Marks[]> {
        return this.marksService.findAll();
    }

    @Post()
    async createMarks(@Body() body: CreateMarksDto): Promise<Marks> {
        return this.marksService.create(body);
        // return
    }

}
