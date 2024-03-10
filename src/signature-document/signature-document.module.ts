import { Module } from '@nestjs/common';
import { SignatureDocumentService } from './signature-document.service';
import { SignatureDocumentController } from './signature-document.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignatureDocument } from './entities/signature-document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SignatureDocument])],
  controllers: [SignatureDocumentController],
  providers: [SignatureDocumentService],
})
export class SignatureDocumentModule {}
