import { CreateUserDto } from "./../dtos/createuser.dto";
import UserRepository from "../repositories/user.repository";
import User from "../entities/user.entity";
import { IUserService } from "./iuser.service";

class UserService implements IUserService {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.userRepository.insertData(createUserDto);
    return newUser;
  }
}

export default UserService;
