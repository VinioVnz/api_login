import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { authJwt } from "../midleware/authJws";
const routes = Router()

routes.get('/', authJwt, UserController.getAll)
routes.get('/:id', authJwt, UserController.getOne)
routes.delete('/:id', authJwt, UserController.delete)
routes.put('/:id', authJwt, UserController.update)
routes.post('/', UserController.create)

export default routes;