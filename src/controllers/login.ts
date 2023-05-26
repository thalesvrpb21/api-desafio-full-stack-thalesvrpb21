import { Request, Response } from "express";
import { ILogin } from "../interfaces/login";
import { createLoginService } from "../services/login";

async function createLoginController (req: Request, res: Response): Promise<Response> {

    const data: ILogin = req.body

    const token = await createLoginService(data)

    return res.json({
       token: token
    })

}

export { createLoginController }