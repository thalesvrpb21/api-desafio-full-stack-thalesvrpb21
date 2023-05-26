import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { Contact } from "../entities";
import { contactSchemaResponse } from "../schemas/contact";
import { IContactRequest, IContactResponse } from "../interfaces/contact";

async function createContactService (data: IContactRequest) : Promise<IContactResponse> {

    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact = contactRepo.create(data)

    await contactRepo.save(contact)

    const newcontact = contactSchemaResponse.parse(contact)

    return newcontact
    
}

export { createContactService }