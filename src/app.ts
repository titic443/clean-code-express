import User from "./entities/user.entity";
import { createConnection } from "typeorm";

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
