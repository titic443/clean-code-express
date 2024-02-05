import { AppDataSource } from "./../data-source";

import {
  DataSource,
  EntityManager,
  EntityRepository,
  ObjectLiteral,
  Repository,
} from "typeorm";
import User from "../entities/user.entity";
import { CreateUserDto } from "../dtos/createuser.dto";

class UserRepository extends Repository<User> {
  constructor(datasource: DataSource) {
    super(User, datasource.createEntityManager());
  }

  async createUser(user: CreateUserDto) {
    try {
      const data = new User();
      data.name = user.name;
      data.email = user.email;
      data.age = user.age;

      const result = await this.save(data);
      return result;
    } catch (err) {
      throw err;
    }
  }
}

export default UserRepository;
