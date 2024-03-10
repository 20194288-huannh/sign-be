import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { SignModule } from './sign/sign.module';
import { DocumentModule } from './document/document.module';
import { SignatureDocumentModule } from './signature-document/signature-document.module';
import { SignatureDocument } from './signature-document/entities/signature-document.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3015,
      username: 'root',
      password: 'root',
      database: 'sign-db',
      entities: [User, SignatureDocument],
      synchronize: true,
    }),
    AuthModule,
    SignModule,
    DocumentModule,
    SignatureDocumentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
