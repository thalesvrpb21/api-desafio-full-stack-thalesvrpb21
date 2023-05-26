import { Router } from "express";
import { verifyTokenExistsMiddleware } from "../middlewares/login/loginMiddleware";
import { validDataContactMiddleware, validUniqEmailContactMiddleware, validUniqNumberContactMiddleware } from "../middlewares/contact/contactMiddleware";
import { createContactController } from "../controllers/contact";

const contacRoutes: Router = Router()

contacRoutes.post("", verifyTokenExistsMiddleware, validUniqEmailContactMiddleware, 
validDataContactMiddleware, validUniqNumberContactMiddleware, createContactController)

export { contacRoutes }