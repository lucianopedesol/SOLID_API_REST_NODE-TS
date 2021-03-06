import { AutoMap } from "@automapper/classes";

import { DTOBase } from "../../../../shared/modelBase/dtoBase";

export class ListUserDTO extends DTOBase {
    @AutoMap()
    name: string;
    @AutoMap()
    email: string;
    @AutoMap()
    password: string;
}
