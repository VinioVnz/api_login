import { AppDataSource } from "../database/data-source";
import { User } from "../database/entities/User";
const bcript = require('bcrypt')
const saltRounds = 10

const repo = AppDataSource.getRepository(User)

type UserProtected = {
    'id': number,
    'username': string,
    'email': string,
    'createdAt': Date
}


export const UserService = {
    async getAll(): Promise<User[]> {
        return await repo.find({
            select: ['id', 'nome', 'email', 'createdAt']
        });
    },

    async getOne(id: number): Promise<UserProtected | null> {
        const user = await repo.findOneBy({ id });
        if (!user) {
            return null;
        }
        return {
            'id': user.id,
            'username': user.nome,
            'email': user.email,
            'createdAt': user.createdAt
        }
    },

    async create(data: Partial<User>): Promise<UserProtected> {
         data.password = await bcript.hash(data.password, saltRounds)
        const user = repo.create(data)
        await repo.save(user)

        return {
            'id': user.id,
            'username': user.nome,
            'email': user.email,
            'createdAt': user.createdAt
        }
    },

    async delete(id: number): Promise<UserProtected | null> {
        const user = await repo.findOneBy({ id });
        if (!user) {
            return null
        }
        await repo.remove(user);
        return {
            'id': user.id,
            'username': user.nome,
            'email': user.email,
            'createdAt': user.createdAt
        }
    },

    async update(id: number, data: Partial<User>): Promise<UserProtected | null> {
        const user = await repo.findOneBy({ id });
        if (!user) return null;
        const atualizado = repo.merge(user, data);
        await repo.save(atualizado);

        return {
            'id': atualizado.id,
            'username': atualizado.nome,
            'email': atualizado.email,
            'createdAt': atualizado.createdAt
        }
    }
}