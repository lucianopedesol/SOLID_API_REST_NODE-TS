import {
    createMap,
    forMember,
    mapFrom,
    MappingProfile,
} from "@automapper/core";

import { User } from "../entities/User";
import { CreateUserRequestDTO } from "../useCases/createUser/CreateUserDTO";
import { ListUserDTO } from "../useCases/listUsers/ListUserDTO";

const UserProfile: MappingProfile = (mapper) => {
    createMap(
        mapper,
        User,
        ListUserDTO,
        forMember(
            (d) => d.password,
            mapFrom(() => null)
        )
    );
    createMap(mapper, CreateUserRequestDTO, User);
};

export { UserProfile };
