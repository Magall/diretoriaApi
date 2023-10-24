import { Test, TestingModule } from '@nestjs/testing';
import { PeladaService } from './pelada.service';

describe('PeladaService', () => {
  let service: PeladaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeladaService],
    }).compile();

    service = module.get<PeladaService>(PeladaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
