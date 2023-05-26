import { Request, Response } from "express";
import { createContactService } from "../services/contact";


async function createContactController (req: Request, res: Response): Promise<Response> {
    
    const data = req.body

    const createUser = await createContactService(data)

    return res.status(201).json(createUser)

}

export { createContactController }