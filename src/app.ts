import cors from "cors";
import express from "express";
import { register } from "module";
import UserRepository from "./repositories/user.repository";
import User from "./entities/user.entity";
import UserService from "./services/user.service";
import UserController from "./controllers/user.controller";
import { AppDataSource } from "./data-source";

const app = express();

app.use(cors);
app.use(express.json());

const userRepository = new UserRepository(AppDataSource);
const userService = new UserService(userRepository);
const userController = new UserController(userService);
