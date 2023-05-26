import { Request, Response } from "express";
import { createUsersService } from "../services/users";


async function createUsersController (req: Request, res: Response): Promise<Response> {
    
    const data = req.body

    const createUser = await createUsersService(data)

    return res.status(201).json(createUser)

}

export { createUsersController }