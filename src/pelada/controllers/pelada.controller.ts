import { Controller, Get } from '@nestjs/common';
import { PeladaService } from '../services/pelada.service';
import { pelada } from '../models/pelada.entity';

@Controller('pelada')
export class PeladaController {
  constructor(private peladaService: PeladaService) {}
  @Get()
  async findAll(): Promise<pelada[]> {
    return this.peladaService.findAll();
  }
}
