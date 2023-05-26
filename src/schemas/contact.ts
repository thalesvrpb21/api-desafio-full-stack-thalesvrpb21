import { z } from "zod";

const contactSchemaRequest = z.object({
    name: z.string().max(70),
    email: z.string().email().max(50),
    phone: z.string().max(13)
})

const contactSchemaResponse = z.object({
    id: z.number(),
    name: z.string().max(70),
    email: z.string().email().max(50),
    createdAt: z.string(),
    phone: z.string().max(13)
})

export { contactSchemaRequest, contactSchemaResponse }