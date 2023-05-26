import { Request, Response, NextFunction } from "express";
import { loginSchema } from "../../schemas/login";
import { AppError } from "../../errors";
import jwt from "jsonwebtoken"


async function validLoginDataMiddleware (req: Request, res: Response, next: NextFunction)
: Promise<void> {

    const validatedData = loginSchema.parse(req.body)
    req.body = validatedData
    
    return next()

}

async function verifyTokenExistsMiddleware (req: Request, res: Response, next: NextFunction)
: Promise<void> {

    let token = req.headers.authorization

    if(!token){
        throw new AppError("Missing bearer token", 401)
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {

        if(error){
            throw new AppError(error.message, 401)
        }

        req.userIsAdm = {
            id: Number(decoded.sub),
            admin: decoded.admin
        }

        return next()

    })
}

export {validLoginDataMiddleware, verifyTokenExistsMiddleware}