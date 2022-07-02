import { AutoMap } from "@automapper/classes";

import { EntityBase } from "../../../shared/modelBase/entityBase";

export class User extends EntityBase {
    @AutoMap()
    public name: string;
    @AutoMap()
    public email: string;
    @AutoMap()
    public password: string;

    public created_at?: Date;

    constructor(props: Omit<User, "id">, id?: string) {
        super(id);
        Object.assign(this, props);
    }
}
