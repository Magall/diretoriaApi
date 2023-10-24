import { MensalistaAVencer } from './../../models/MensalistaAVencer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecebimentoMensalistaService {
  constructor(
    @InjectRepository(MensalistaAVencer)
    private recebimentoMensalistaRepository: Repository<MensalistaAVencer>,
  ) {}

  async getMensalistasAVencer(idPelada: number): Promise<MensalistaAVencer[]> {
    const dataReferencia = new Date(Date.now()).toISOString();
    console.log(dataReferencia);
    const aVencer = await this.recebimentoMensalistaRepository.query(
      `select * from mensalistasAVencer(${idPelada},Date'${new Date(Date.now())
        .toISOString()
        .substring(0, 9)}')`,
    );

    return aVencer;
  }
}
