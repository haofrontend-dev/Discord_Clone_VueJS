import { string, object } from 'yup'

export const LoginSchema = object({
    email: string().email().required(),
    password: string().required(),
})
