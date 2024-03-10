import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, UploadedFile, UseInterceptors } from '@nestjs/common';
import { SignatureDocumentService } from './signature-document.service';
import { CreateSignatureDocumentDto } from './dto/create-signature-document.dto';
import { UpdateSignatureDocumentDto } from './dto/update-signature-document.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('signature-document')
export class SignatureDocumentController {
  constructor(private readonly signatureDocumentService: SignatureDocumentService) {}

  @Post()
  @UseGuards(AuthGuard) // Protect route with JWT Guard
  @UseInterceptors(FileInterceptor('file'))
  create(@Request() request, @UploadedFile() signature: Express.Multer.File) {
    console.log(signature)
    return this.signatureDocumentService.create(signature);
  }

  @Get()
  findAll() {
    return this.signatureDocumentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.signatureDocumentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignatureDocumentDto: UpdateSignatureDocumentDto) {
    return this.signatureDocumentService.update(+id, updateSignatureDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.signatureDocumentService.remove(+id);
  }
}
