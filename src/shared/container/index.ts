import { container } from 'tsyringe';
import { UserRepository } from '../../modules/users/repositories/implementations/UserRepository';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { IMailProvider } from '../../providers/IMailProvider';
import { MailTrapMailProviders } from '../../providers/implementations/MailTrapMailProviders';


container.registerSingleton<IUsersRepository>("UserRepository", UserRepository)
container.registerSingleton<IMailProvider>("MailTrapMailProviders", MailTrapMailProviders)