import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IMailProvider } from "../../../../providers/IMailProvider";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

import { inject, injectable } from 'tsyringe'

@injectable()
export class CreateUserUserCase {

    constructor(
        @inject("UserRepository") private usersRepository: IUsersRepository,
        @inject("MailTrapMailProviders") private mailProvider: IMailProvider,
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error('User already Exists.');
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'Nossa empresa',
                email: 'nossaempresa@email.com'
            },
            subject: 'Seja bem-vindo',
            body: '<p>Faça o login em nossa plataforma</p>'
        })
    }
}