import UserController from "./controllers/user.controller";
import User from "./entities/user.entity";
import { DataSource, createConnection } from "typeorm";
import UserRepository from "./repositories/user.repository";
import UserService from "./services/user.service";

export const createTestConnection = async () => {
  const datasource = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
  });
  console.log("Connect PG DB success");
  return datasource;
};

export class initHandler {
  usercontroller: UserController;
  constructor(private datasource: DataSource) {
    this.datasource = datasource;
    const userRepository = new UserRepository(this.datasource);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);
    this.usercontroller = userController;
  }

  get exectute() {
    return this.usercontroller;
  }
}
