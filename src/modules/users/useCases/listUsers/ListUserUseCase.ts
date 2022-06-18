import { inject, injectable } from "tsyringe";
import { mapper } from "../../../../shared/autoMapper";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ListUserDTO } from "./ListUserDTO";

@injectable()
export class ListUserUseCase {

    constructor(
        @inject("UserRepository") private usersRepository: IUsersRepository,
    ) { }

    async getAll(): Promise<ListUserDTO[]> {
        const users = await this.usersRepository.getAll();
        const dto: ListUserDTO[] = users.map(user => mapper.map(user, User, ListUserDTO));
        return dto || [];
    }
    async findById(id: string): Promise<ListUserDTO> {
        const users = await this.usersRepository.findById(id);
        const dto = mapper.map(users, User, ListUserDTO);

        return dto;
    }
}