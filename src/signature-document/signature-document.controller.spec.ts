import { Test, TestingModule } from '@nestjs/testing';
import { SignatureDocumentController } from './signature-document.controller';
import { SignatureDocumentService } from './signature-document.service';

describe('SignatureDocumentController', () => {
  let controller: SignatureDocumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignatureDocumentController],
      providers: [SignatureDocumentService],
    }).compile();

    controller = module.get<SignatureDocumentController>(SignatureDocumentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
