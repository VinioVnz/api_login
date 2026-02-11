import * as dotenv from 'dotenv';
import { AppDataSource } from './database/data-source';
import express from "express"
import userRoutes from "./routes/user.routes"
import routeLogin from './routes/auth.routes'

dotenv.config();

AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(express.json());
    app.use('/users', userRoutes);
     app.use('/login', routeLogin)
    app.listen(process.env.PORT, () => {
        console.log('Servidor rodando na porta: ', process.env.PORT);
    })

}).catch((error) => {
    console.log('Banco de dados não conectado ', error)
})