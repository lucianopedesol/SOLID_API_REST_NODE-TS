import { createMap, forMember, mapFrom, MappingProfile, ArrayKeyedMap } from "@automapper/core";
import { User } from "../entities/User";
import { ListUserDTO } from "../useCases/listUsers/ListUserDTO";


const UserProfile: MappingProfile = (mapper) => {
    createMap(mapper, User, ListUserDTO,
        forMember(
            (d) => d.password,
            mapFrom((_s) => null)
        )
    );
}

export { UserProfile };