import { Test, TestingModule } from '@nestjs/testing';
import { SignatureDocumentService } from './signature-document.service';

describe('SignatureDocumentService', () => {
  let service: SignatureDocumentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignatureDocumentService],
    }).compile();

    service = module.get<SignatureDocumentService>(SignatureDocumentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
