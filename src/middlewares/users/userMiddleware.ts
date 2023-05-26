import { User } from "../../entities";
import { AppError } from "../../errors";
import { Repository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { usersSchemaRequest } from "../../schemas/users";


async function validUniqEmailUserMiddleware (req: Request, res: Response, next: NextFunction)
:Promise<void> {
    
    const usersRepo: Repository<User> = AppDataSource.getRepository(User)

    if(req.body.email){

        const searchEmail = await usersRepo.findOne({
            where:{
                email: req.body.email
            }
        })
    
        if(searchEmail){
            throw new AppError("Email already exists", 409)
        }
    }


    return next()
    
}

async function validUniqNumberUserMiddleware (req: Request, res: Response, next: NextFunction)
:Promise<void> {
    
    const usersRepo: Repository<User> = AppDataSource.getRepository(User)

    if(req.body.phone){

        const searchPhone = await usersRepo.findOne({
            where:{
                phone: req.body.phone
            }
        })
    
        if(searchPhone){
            throw new AppError("Number already exists", 409)
        }
    }


    return next()
    
}

async function validDataUsersMiddleware (req: Request, res: Response, next: NextFunction)
:Promise<void> {

    const validatedData = usersSchemaRequest.parse(req.body)

    req.body = validatedData

    return next()
}

export { validUniqEmailUserMiddleware, validDataUsersMiddleware, validUniqNumberUserMiddleware }