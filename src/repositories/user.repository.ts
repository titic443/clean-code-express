import { Repository, EntityRepository, DataSource } from "typeorm";
import User from "../entities/user.entity";
import { CreateUserDto } from "../dtos/createuser.dto";

class UserRepository extends Repository<User> {
  constructor(datasource: DataSource) {
    super(User, datasource.createEntityManager());
  }

  async insertData(user: CreateUserDto) {
    try {
      let data = new User();
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
