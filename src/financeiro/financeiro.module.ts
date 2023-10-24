import { MensalistaAVencer } from './models/MensalistaAVencer.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecebimentoMensalistaService } from './services/recebimento-mensalista/recebimento-mensalista.service';
import { RecebimentoMensalistaController } from './controllers/recebimento-mensalista/recebimento-mensalista.controller';
@Module({
  imports: [TypeOrmModule.forFeature([MensalistaAVencer])],
  controllers: [RecebimentoMensalistaController],
  providers: [RecebimentoMensalistaService],
})
export class RecebimentoModule {}
