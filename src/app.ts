import "express-async-errors"
import { globalErrors } from "./errors"
import express, { Application, json } from "express";

const app: Application = express()
app.use(express.json())


app.use(globalErrors)

export default app