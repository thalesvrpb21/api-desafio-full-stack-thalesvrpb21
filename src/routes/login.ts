import { Router } from "express";
import { createLoginController } from "../controllers/login";
import { validLoginDataMiddleware } from "../middlewares/login/loginMiddleware";

const loginRoutes: Router = Router()

loginRoutes.post("", validLoginDataMiddleware, createLoginController)

export { loginRoutes }