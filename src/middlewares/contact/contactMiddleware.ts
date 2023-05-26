import { Contact } from "../../entities";
import { AppError } from "../../errors";
import { Repository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../../data-source";
import { contactSchemaRequest } from "../../schemas/contact";


async function validUniqEmailContactMiddleware (req: Request, res: Response, next: NextFunction)
:Promise<void> {
    
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    if(req.body.email){

        const searchEmail = await contactRepo.findOne({
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

async function validUniqNumberContactMiddleware (req: Request, res: Response, next: NextFunction)
:Promise<void> {
    
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    if(req.body.phone){

        const searchPhone = await contactRepo.findOne({
            where:{
                phone: req.body.phone
            }
        })
    
        if(searchPhone){
            throw new AppError("Phone already exists", 409)
        }
    }


    return next()
    
}

async function validDataContactMiddleware (req: Request, res: Response, next: NextFunction)
:Promise<void> {

    const validatedData = contactSchemaRequest.parse(req.body)

    req.body = validatedData

    return next()
}

export { validUniqEmailContactMiddleware, validDataContactMiddleware, validUniqNumberContactMiddleware }