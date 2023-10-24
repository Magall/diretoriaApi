import { MensalistaAVencer } from './../../models/MensalistaAVencer.entity';
import { RecebimentoMensalistaService } from './../../services/recebimento-mensalista/recebimento-mensalista.service';
import { Controller, Get } from '@nestjs/common';

@Controller('recebimento-mensalista')
export class RecebimentoMensalistaController {
  constructor(
    private RecebimentoMensalistaService: RecebimentoMensalistaService,
  ) {}

  @Get('/aVencer')
  async aVencer(idPelada: number): Promise<MensalistaAVencer[]> {
    return this.RecebimentoMensalistaService.getMensalistasAVencer(idPelada);
  }
}
