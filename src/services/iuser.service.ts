import User from "../entities/user.entity";
import { CreateUserDto } from "../dtos/createuser.dto";
export interface IUserService {
  createUser(createUserDto: CreateUserDto): Promise<User>;
}
