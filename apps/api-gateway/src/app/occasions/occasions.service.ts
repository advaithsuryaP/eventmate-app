import { Injectable } from '@nestjs/common';
import { CreateOccasionDto } from './dto/create-occasion.dto';
import { UpdateOccasionDto } from './dto/update-occasion.dto';

@Injectable()
export class OccasionsService {
    create(createOccasionDto: CreateOccasionDto) {
        return 'This action adds a new occasion';
    }

    findAll() {
        return `This action returns all occasions`;
    }

    findOne(id: number) {
        return `This action returns a #${id} occasion`;
    }

    update(id: number, updateOccasionDto: UpdateOccasionDto) {
        return `This action updates a #${id} occasion`;
    }

    remove(id: number) {
        return `This action removes a #${id} occasion`;
    }
}
