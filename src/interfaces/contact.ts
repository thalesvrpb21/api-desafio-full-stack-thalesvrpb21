interface IContactRequest {
    name: string,
    email: string,
    phone: string 
}

interface IContactResponse {
    id: number,
    name: string,
    email: string,
    phone: string,
    createdAt: string | Date,
}

export { IContactRequest, IContactResponse }