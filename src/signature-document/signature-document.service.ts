import { Injectable } from '@nestjs/common';
import { CreateSignatureDocumentDto } from './dto/create-signature-document.dto';
import { UpdateSignatureDocumentDto } from './dto/update-signature-document.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SignatureDocument } from './entities/signature-document.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SignatureDocumentService {
  constructor(
    @InjectRepository(SignatureDocument)
    private signatureDocumentRepo: Repository<SignatureDocument>,
  ) {}

  async create(signature: Express.Multer.File) {
    const signatureDocument = new SignatureDocument();
    signatureDocument.name = '1';
    // signatureDocument.path = createSignatureDocumentDto.path;
    // signatureDocument.user = user;
    // return await this.signatureDocumentRepo.create({
    //   ...createSignatureDocumentDto,
    // });
  }

  findAll() {
    return `This action returns all signatureDocument`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signatureDocument`;
  }

  update(id: number, updateSignatureDocumentDto: UpdateSignatureDocumentDto) {
    return `This action updates a #${id} signatureDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} signatureDocument`;
  }
}
