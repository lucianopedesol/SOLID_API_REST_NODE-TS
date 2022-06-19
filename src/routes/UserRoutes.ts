import { Router } from "express";

import { CreateUserControler } from "../modules/users/useCases/createUser/CreateUserControler";
import { ListUserControler } from "../modules/users/useCases/listUsers/ListUserControler";

const userRoutes = Router();
const createUserControler = new CreateUserControler();
const listUserControler = new ListUserControler();

userRoutes.post("/users", createUserControler.handle);
userRoutes.get("/users/getAll", listUserControler.getAll);
userRoutes.get("/users/findById/:id", listUserControler.findById);

export { userRoutes };
