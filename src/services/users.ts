import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { User } from "../entities";
import { IUsersRequest, IUsersResponse } from "../interfaces/users";
import { usersSchemaResponse } from "../schemas/users";

async function createUsersService (data: IUsersRequest) : Promise<IUsersResponse> {

    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const users = userRepo.create(data)

    await userRepo.save(users)

    const newUser = usersSchemaResponse.parse(users)

    return newUser
    
}

export { createUsersService }