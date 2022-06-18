import { AutoMap } from "@automapper/classes";

export class DTOBase {
    @AutoMap()
    public id?: string;

}