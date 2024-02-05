import { CreateUserDto } from "./../dtos/createuser.dto";
import UserRepository from "../repositories/user.repository";
import User from "../entities/user.entity";

class UserService {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.userRepository.createUser(createUserDto);
    return newUser;
  }
}

export default UserService;
