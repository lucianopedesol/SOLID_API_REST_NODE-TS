import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUserCase } from "./CreateUserUseCase";

export class CreateUserControler {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        const createUserUserCase = container.resolve(CreateUserUserCase);
        try {
            await createUserUserCase.execute({
                name,
                email,
                password,
            });

            return response.status(201).send();
        } catch (error: any) {
            return response.status(400).json({
                message: error?.message || "Unexpected error",
            });
        }
    }
}
