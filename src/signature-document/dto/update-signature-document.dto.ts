import { PartialType } from '@nestjs/mapped-types';
import { CreateSignatureDocumentDto } from './create-signature-document.dto';

export class UpdateSignatureDocumentDto extends PartialType(CreateSignatureDocumentDto) {}
