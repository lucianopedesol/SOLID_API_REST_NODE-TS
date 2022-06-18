import { Request, Response } from "express";
import { CreateUserUserCase } from "./CreateUserUserCase";

export class CreateUserControler {
    constructor(
        private createUserUserCase: CreateUserUserCase,
    ) {

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try {
            await this.createUserUserCase.execute({
                name, email, password
            });

            return response.status(201).send();
        } catch (error: any) {
            return response.status(400).json({
                message: error?.message || 'Unexpected error'
            });
        }
    }
}