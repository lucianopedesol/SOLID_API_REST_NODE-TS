import { AutoMap } from "@automapper/classes";

export class ListUserDTO {
    @AutoMap()
    id: string;
    @AutoMap()
    name: string;
    @AutoMap()
    email: string;
    @AutoMap()
    password: string;
}