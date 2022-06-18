import { User } from "../entities/User";

export interface IUsersRepository {
    getAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}