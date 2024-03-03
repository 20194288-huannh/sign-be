import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";
import { Repository } from "typeorm";
import { users } from "./data";
import { UserService } from "src/user/user.service";

/**
 * Service dealing with user seeding operations.
 *
 * @class
 */
@Injectable()
export class UserSeederService {
  /**
   * Create an instance of the UserSeederService.
   *
   * @constructs
   *
   * @param {Repository<User>} userRepository The injected user repository
   */
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly userService: UserService
  ) {}

  /**
   * Seed all users.
   *
   * @function
   * @returns {Array<Promise<User>>} An array of promises for user creation
   */
  create(): Array<Promise<User>> {
    return users.map(async (user: User) => {
      try {
        const dbUser = await this.userRepository.findOne({ where: { email: user.email } });
        if (dbUser) {
          // If user already exists, resolve with null
          return null;
        } else {
            user.password = await this.userService.hashPassword(user.password)
          // If user doesn't exist, save the user and return the saved user
          return await this.userRepository.save(user);
        }
      } catch (error) {
        // Catch and reject any errors
        return Promise.reject(error);
      }
    });
  }
}