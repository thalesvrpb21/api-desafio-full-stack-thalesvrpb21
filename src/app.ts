import "express-async-errors"
import { globalErrors } from "./errors"
import express, { Application, json } from "express";
import { loginRoutes } from "./routes/login";
import { usersRoutes } from "./routes/users";
import { contacRoutes } from "./routes/contac";
import cors from "cors";

const app: Application = express()
app.use(express.json())

app.use(cors())

app.use("/users", usersRoutes)

app.use("/login", loginRoutes)

app.use("/contact", contacRoutes)

app.use(globalErrors)

export default app