import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SignatureDocument } from './entities/signature-document.entity';

export class SignatureDocumentRepository extends Repository<SignatureDocument> {
  constructor(
    @InjectRepository(SignatureDocument)
    private signatureDocumentRepo: Repository<SignatureDocument>,
  ) {
    super(
        signatureDocumentRepo.target,
        signatureDocumentRepo.manager,
        signatureDocumentRepo.queryRunner,
    );
  }

  public async findAll(): Promise<SignatureDocument[]> {
    return this.find();
  }

  public async findById(id: number): Promise<SignatureDocument | null> {
    return this.findOneBy({ id: id });
  }

  public async store(signatureDocument: SignatureDocument): Promise<SignatureDocument> {
    const newSignDoc = this.create(signatureDocument);
    return this.save(signatureDocument);
  }

  public async updateOne(
    id: number,
    signatureDocument: SignatureDocument,
  ): Promise<SignatureDocument | undefined> {
    const user = await this.findById(id);
    if (!user) return undefined;
    Object.assign(user, signatureDocument);
    return this.save(user);
  }

  public async destroy(id: number): Promise<void> {
    await this.delete(id);
  }
}