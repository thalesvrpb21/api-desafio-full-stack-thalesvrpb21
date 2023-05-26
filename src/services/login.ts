import jwt from "jsonwebtoken";
import { AppError } from "../errors";
import { ILogin } from "../interfaces/login";
import { User } from "../entities";
import { compare } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import "dotenv/config"


async function createLoginService (data: ILogin) : Promise<string> {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: data.email
    })

    if(!user){
        throw new AppError("Invalid credentials", 401)
    }

    const checksPassword = await compare(data.password, user.password)

    if(!checksPassword){
        throw new AppError("Invalid credentials", 401)
    }

    const token = jwt.sign(
        {
            admin: user.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: "4h",
            subject: user.id.toString()
        }
    )

    return token
}

export { createLoginService }