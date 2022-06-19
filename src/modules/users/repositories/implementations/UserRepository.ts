import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UserRepository implements IUsersRepository {
    private users: User[] = [];

    async getAll(): Promise<User[]> {
        return this.users;
    }
    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }
    async findByEmail(email: string): Promise<User> {
        return this.users.find((user) => user.email === email);
    }
    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}
