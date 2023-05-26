import { z } from "zod";

const usersSchemaRequest = z.object({
    name: z.string().max(70),
    email: z.string().email().max(50),
    password: z.string().max(120),
    admin: z.boolean().default(false).optional(),
    phone: z.string().max(13)
})

const usersSchemaResponse = z.object({
    id: z.number(),
    name: z.string().max(70),
    email: z.string().email().max(50),
    admin: z.boolean().default(false).optional(),
    createdAt: z.string(),
    phone: z.string().max(13)
})

export { usersSchemaRequest, usersSchemaResponse }