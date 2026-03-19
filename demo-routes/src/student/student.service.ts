import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {

  create(data: any) {
        return {
            message: "Data inserted",
            data: data
        }
  }

  findAll() {
    return {
      message: 'Findall called',
    };
  }

  findOne(id: number) {
    return {
      message: `Findone called with id: ${id}`,
    };
  }

  update(id: string,data: any) {
    return {
      message: {
        id: id,
        message : 'Update called',
        data: data
      },
    };
  }

  remove(id: number) {
    return {
            message: `Record Deleted for ${id}`
    };
  }
}
