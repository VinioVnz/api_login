import * as dotenv from 'dotenv';
import { AppDataSource } from './database/data-source';
import express from "express"
import userRoutes from "./routes/user.routes"
import { User } from './database/entities/User';

dotenv.config();

AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(express.json());
    app.use('/users', userRoutes)
    app.listen(process.env.PORT, () => {
        console.log('Servidor rodando na porta: ', process.env.PORT);
    })

}).catch((error) => {
    console.log('Banco de dados não conectado ', error)
})