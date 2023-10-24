import { Test, TestingModule } from '@nestjs/testing';
import { RecebimentoMensalistaService } from './recebimento-mensalista.service';

describe('RecebimentoMensalistaService', () => {
  let service: RecebimentoMensalistaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecebimentoMensalistaService],
    }).compile();

    service = module.get<RecebimentoMensalistaService>(
      RecebimentoMensalistaService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
