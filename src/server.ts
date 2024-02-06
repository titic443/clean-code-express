import { Request, Response } from "express";
import cors from "cors";
import express from "express";
import { errorMiddleware } from "./middleware/error.middleware";
import { createTestConnection, initHandler } from "./app";

async function main() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(cors());
  app.use(express.json());

  const handler = new initHandler(await createTestConnection());

  app.post("/router1", (req: Request, res: Response) =>
    handler.exectute.createUser(req, res)
  );

  app.use(errorMiddleware);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
