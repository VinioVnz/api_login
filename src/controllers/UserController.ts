import { UserService } from "../services/UserService"
import {Request, Response } from "express"

const notFound = 'Usuário não encontrado'
const serverError = "Erro ao realizar a operação"

export const UserController = {
    async getAll(req: Request, res: Response) {
        try {
            const user = await UserService.getAll();
            res.status(200).json(user)

        } catch (error) {
            res.status(500).json({ error: serverError, desc: error })
        }
    },

    async getOne(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const user = await UserService.getOne(id)
            if (!user) {
                res.status(404).json(notFound)
            }
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ error: serverError, desc: error })
        }
    },

    async create(req: Request, res: Response) {
        try {
            const data = req.body;
            const user = await UserService.create(data)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ error: serverError, desc: error })
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const deletado = await UserService.delete(id)

            if (!deletado) {
                res.status(404).json(notFound)
            }
            res.status(200).json({ user: deletado, message: 'Sucesso' })
        } catch (error) {
            res.status(500).json({ error: serverError, desc: error })
        }
    },

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const data = req.body;

            const atualizado = await UserService.update(id, data)
            if (!atualizado) {
                res.status(404).json(notFound)
            }

            res.status(200).json({ atualizado: atualizado, message: 'Sucesso' })
        } catch (error) {
            res.status(500).json(serverError)
        }
    }

}