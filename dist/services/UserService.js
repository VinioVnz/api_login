"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const data_source_1 = require("../database/data-source");
const User_1 = require("../database/entities/User");
const repo = data_source_1.AppDataSource.getRepository(User_1.User);
exports.UserService = {
    async getAll() {
        return await repo.find({
            select: ['id', 'nome', 'email', 'createdAt']
        });
    },
    async getOne(id) {
        const user = await repo.findOneBy({ id });
        if (!user) {
            return null;
        }
        return {
            'id': user.id,
            'username': user.nome,
            'email': user.email,
            'createdAt': user.createdAt
        };
    },
    async create(data) {
        const user = repo.create(data);
        await repo.save(user);
        return {
            'id': user.id,
            'username': user.nome,
            'email': user.email,
            'createdAt': user.createdAt
        };
    },
    async delete(id) {
        const user = await repo.findOneBy({ id });
        if (!user) {
            return null;
        }
        await repo.remove(user);
        return {
            'id': user.id,
            'username': user.nome,
            'email': user.email,
            'createdAt': user.createdAt
        };
    },
    async update(id, data) {
        const user = await repo.findOneBy({ id });
        if (!user)
            return null;
        const atualizado = repo.merge(user);
        await repo.save(atualizado);
        return {
            'id': atualizado.id,
            'username': atualizado.nome,
            'email': atualizado.email,
            'createdAt': atualizado.createdAt
        };
    }
};
