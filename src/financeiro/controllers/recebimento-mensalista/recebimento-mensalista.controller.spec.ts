import { Test, TestingModule } from '@nestjs/testing';
import { RecebimentoMensalistaController } from './recebimento-mensalista.controller';

describe('RecebimentoMensalistaController', () => {
  let controller: RecebimentoMensalistaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecebimentoMensalistaController],
    }).compile();

    controller = module.get<RecebimentoMensalistaController>(RecebimentoMensalistaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
