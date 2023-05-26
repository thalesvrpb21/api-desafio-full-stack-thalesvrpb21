interface IUsersRequest {
    name: string,
    email: string,
    password: string,
    admin?: boolean,
    phone: string
}

interface IUsersResponse {
    id: number,
    name: string,
    email: string,
    admin?: boolean | undefined,
    phone: string,
    createdAt: string | Date,
}

export { IUsersRequest, IUsersResponse }