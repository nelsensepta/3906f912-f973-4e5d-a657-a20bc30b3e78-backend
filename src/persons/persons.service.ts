import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonsService {
  constructor(private prisma: PrismaService) {}

  async create(createPersonDto: CreatePersonDto) {
    const createData = await this.prisma.persons.create({
      data: createPersonDto,
    });
    return {
      statusCode: 200,
      data: createData,
    };
  }

  async findAll() {
    const dataPersons = await this.prisma.persons.findMany({});
    return {
      statusCode: 200,
      data: dataPersons,
    };
  }

  async findOne(id: number) {
    const dataPerson = await this.prisma.persons.findFirst({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: dataPerson,
    };
  }

  async update(id: number, updatePersonDto: UpdatePersonDto) {
    const updatePerson = await this.prisma.persons.update({
      data: updatePersonDto,
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: updatePerson,
    };
  }

  async remove(id: number) {
    const deletePerson = await this.prisma.persons.delete({
      where: {
        id,
      },
    });
    return {
      statusCode: 200,
      data: deletePerson,
      message: `Success delete ${id}`,
    };
  }
}
