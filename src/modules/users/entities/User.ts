import { AutoMap } from "@automapper/classes";
import { uuid } from "uuidv4";

export class User {
    @AutoMap()
    public readonly id: string;
    @AutoMap()
    public name: string;
    @AutoMap()
    public email: string;
    @AutoMap()
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);
        this.id = id || uuid();
    }
}