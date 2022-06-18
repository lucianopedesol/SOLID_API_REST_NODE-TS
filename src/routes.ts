import { Router, Request, Response } from "express"
import { createUserControler } from "./useCases/CreateUser";
const route = Router()

route.post('/users', (request: Request, response: Response) => {
    return createUserControler.handle(request, response);
})

route.get('/', (_req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})

export { route }