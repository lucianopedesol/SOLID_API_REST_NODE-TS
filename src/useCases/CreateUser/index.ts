import { MailTrapMailProviders } from "../../providers/implementations/MailTrapMailProviders";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserControler } from "./CreateUserControler";
import { CreateUserUserCase } from "./CreateUserUserCase";

const postgresUserRepository = new PostgresUserRepository();
const mailtrapMailProvider = new MailTrapMailProviders();

const createUserUserCase = new CreateUserUserCase(
    postgresUserRepository,
    mailtrapMailProvider
);

const createUserControler = new CreateUserControler(
    createUserUserCase
);

export { createUserUserCase, createUserControler };