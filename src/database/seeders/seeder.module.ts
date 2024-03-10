import { Logger, Module } from "@nestjs/common";
import { UserSeederModule } from "./user/user.module";
import { Seeder } from "./seeder";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { SignatureDocument } from "src/signature-document/entities/signature-document.entity";

/**
 * Import and provide seeder classes.
 *
 * @module
 */
@Module({
    imports: [
        UserSeederModule, TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3015,
            username: 'root',
            password: 'root',
            database: 'sign-db',
            entities: [User, SignatureDocument],
            synchronize: true,
        }),
    ],
    providers: [Logger, Seeder],
})
export class SeederModule {}