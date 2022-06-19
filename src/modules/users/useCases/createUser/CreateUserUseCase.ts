import { inject, injectable } from "tsyringe";

import { IMailProvider } from "../../../../providers/IMailProvider";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUserRequestDTO } from "./CreateUserDTO";

@injectable()
export class CreateUserUserCase {
    constructor(
        @inject("UserRepository") private usersRepository: IUsersRepository,
        @inject("MailTrapMailProviders") private mailProvider: IMailProvider
    ) {
        /**   */
    }

    async execute(data: CreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(
            data.email
        );

        if (userAlreadyExists) {
            throw new Error("User already Exists.");
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: "Your company name",
                email: "yourcompanyname@email.com",
            },
            subject: "Welcome",
            body: "<p>Get start to platform</p>",
        });
    }
}
