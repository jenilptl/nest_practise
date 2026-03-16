import { Controller, Get, Param, Put, Post, Delete, Body } from '@nestjs/common';

@Controller('student')
export class StudentController {

    @Get()
    getAllStudents() {
        return 'This action returns all students';
    }

    @Get(':id')
    getStudentById(@Param('id') id: string) {
        return 'This action returns a student by id';
    }

    @Post()
    createStudent(@Body() createStudentDto: any) {
        return `This action creates a new student record ${JSON.stringify(createStudentDto)}`;
    }

    @Put(':id')
    updateStudent(@Param('id') id: string, @Body() updateStudentDto: any) {
        return `This action updates a student by id ${JSON.stringify(updateStudentDto)}`;
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string) {
        return `This action deletes a student by id ${id}`;
    }
}
