import { Injectable } from '@nestjs/common';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';

@Injectable()
export class EntryService {
  create(_createEntryInput: CreateEntryInput) {
    return 'This action adds a new entry';
  }

  findAll() {
    return `This action returns all entry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entry`;
  }

  update(id: number, _updateEntryInput: UpdateEntryInput) {
    return `This action updates a #${id} entry`;
  }

  remove(id: number) {
    return `This action removes a #${id} entry`;
  }
}
