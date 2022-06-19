import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserControler {
    async getAll(_request: Request, response: Response): Promise<Response> {
        const listUserCase = container.resolve(ListUserUseCase);
        try {
            const users = await listUserCase.getAll();

            return response.status(201).json(users);
        } catch (error: any) {
            return response.status(400).json({
                message: error?.message || "Unexpected error",
            });
        }
    }
    async findById(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const listUserCase = container.resolve(ListUserUseCase);

        try {
            const user = await listUserCase.findById(id);

            return response.status(201).json(user);
        } catch (error: any) {
            return response.status(400).json({
                message: error?.message || "Unexpected error",
            });
        }
    }
}
