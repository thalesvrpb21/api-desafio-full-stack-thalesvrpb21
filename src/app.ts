import "express-async-errors"
import { globalErrors } from "./errors"
import express, { Application, json } from "express";
import { loginRoutes } from "./routes/login";
import { usersRoutes } from "./routes/users";
import { contacRoutes } from "./routes/contac";

const app: Application = express()
app.use(express.json())

app.use("/users", usersRoutes)

app.use("/login", loginRoutes)

app.use("/contact", contacRoutes)

app.use(globalErrors)

export default app