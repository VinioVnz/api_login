"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
const notFound = 'Usuário não encontrado';
const serverError = "Erro ao realizar a operação";
exports.UserController = {
    async getAll(req, res) {
        try {
            const user = await UserService_1.UserService.getAll();
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error: serverError, desc: error });
        }
    },
    async getOne(req, res) {
        try {
            const id = Number(req.params.id);
            const user = await UserService_1.UserService.getOne(id);
            if (!user) {
                res.status(404).json(notFound);
            }
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error: serverError, desc: error });
        }
    },
    async create(req, res) {
        try {
            const data = req.body;
            const user = await UserService_1.UserService.create(data);
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error: serverError, desc: error });
        }
    },
    async delete(req, res) {
        try {
            const id = Number(req.params.id);
            const deletado = await UserService_1.UserService.delete(id);
            if (!deletado) {
                res.status(404).json(notFound);
            }
            res.status(200).json({ user: deletado, message: 'Sucesso' });
        }
        catch (error) {
            res.status(500).json({ error: serverError, desc: error });
        }
    },
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const data = req.body;
            const atualizado = await UserService_1.UserService.update(id, data);
            if (!atualizado) {
                res.status(404).json(notFound);
            }
            res.status(200).json({ atualizado: atualizado, message: 'Sucesso' });
        }
        catch (error) {
            res.status(500).json(serverError);
        }
    }
};
