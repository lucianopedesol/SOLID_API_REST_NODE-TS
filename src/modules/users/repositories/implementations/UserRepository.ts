import { PrismaClient } from "@prisma/client";

import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

const prisma = new PrismaClient();

export class UserRepository implements IUsersRepository {
    async getAll(): Promise<User[]> {
        return prisma.user.findMany();
    }

    async findById(id: string): Promise<User> {
        return prisma.user.findFirst({
            where: {
                id,
            },
        });
    }

    async findByEmail(email: string): Promise<User> {
        return prisma.user.findFirst({
            where: {
                email,
            },
        });
    }

    async save(user: User): Promise<void> {
        await prisma.user.create({
            data: {
                id: user.id,
                email: user.email,
                name: user.name,
                password: user.password,
                created_at: new Date(),
            },
        });
    }
}
