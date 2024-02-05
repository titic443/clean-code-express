import { Request, Response } from "express";

class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const createUserDto = req.body;
    const createdUser = await this.userService.createUser(createUserDto);

    res.status(201).json(createUserDto);
  }
}

export default UserController;
