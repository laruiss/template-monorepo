import type { Breed, Cat, User as FullUser } from '@prisma/client'
import { PrismaClient } from '@prisma/client'

type User = Omit<FullUser, 'password'>

export type { Cat, Breed, User }
export { PrismaClient }

export const sayHello = () => 'hello'
