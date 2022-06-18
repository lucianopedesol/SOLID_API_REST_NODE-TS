import { AutoMap } from "@automapper/classes";
import { v4 } from "uuid";

export class EntityBase {
    @AutoMap()
    public readonly id: string;

    constructor(id?: string) {
        this.id = id || v4();
    }
}