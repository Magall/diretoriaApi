import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { pelada } from 'src/pelada/models/pelada.entity';
@Injectable()
export class PeladaService {
  constructor(
    @InjectRepository(pelada)
    private peladaRepository: Repository<pelada>,
  ) {}

  findAll(): Promise<pelada[]> {
    return this.peladaRepository.find();
  }
}
