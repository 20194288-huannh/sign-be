import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { UserSeederService } from "./user.service";
import { UserService } from "src/user/user.service";

/**
 * Import and provide seeder classes for users.
 *
 * @module
 */
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserSeederService, UserService],
    exports: [UserSeederService],
})
export class UserSeederModule {}