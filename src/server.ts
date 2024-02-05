import { DataSource, createConnection } from "typeorm";
import { Request, Response } from "express";
import UserController from "./controllers/user.controller";

import UserRepository from "./repositories/user.repository";
import UserService from "./services/user.service";
import cors from "cors";
import express from "express";
import User from "./entities/user.entity";
import { errorMiddleware } from "./middleware/error.middleware";
import { AppDataSource } from "./data-source";
import { createTestConnection } from "./app";

async function main() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  const datasource = await createTestConnection();

  const userRepository = new UserRepository(datasource);
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  app.post("/users", (req, res) => {
    userController.createUser(req, res);
  });

  app.use(errorMiddleware);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
