import { Router } from "express";
import { validDataUsersMiddleware, validUniqEmailUserMiddleware, validUniqNumberUserMiddleware } from "../middlewares/users/userMiddleware";
import { createUsersController } from "../controllers/users";

const usersRoutes: Router = Router()

usersRoutes.post("", validUniqEmailUserMiddleware, validDataUsersMiddleware, 
validUniqNumberUserMiddleware, createUsersController)

export { usersRoutes }