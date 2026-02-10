import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router()

routes.get('/', UserController.getAll)
routes.get('/:id', UserController.getOne)
routes.delete('/:id', UserController.delete)
routes.put('/:id', UserController.update)
routes.post('/', UserController.create)

export default routes;