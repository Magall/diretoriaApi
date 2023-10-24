import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeladaController } from './controllers/pelada.controller';
import { pelada } from 'src/pelada/models/pelada.entity';
import { PeladaService } from './services/pelada.service';

@Module({
  imports: [TypeOrmModule.forFeature([pelada])],
  controllers: [PeladaController],
  providers: [PeladaService],
})
export class PeladaModule {}
