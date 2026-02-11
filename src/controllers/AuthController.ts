import { Response, Request } from "express";
import { AuthService } from "../services/AuthService";

export const AuthController = {
    async login(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body
        try {
            const auth = await AuthService.auth(email, password)

            if (!auth) {
                res.status(401).json({ erro: 'Dados de login incorretos' })
            }

            res.status(200).json(auth)
        } catch (error: any) {
            res.status(401).json({ erro: error.message })
        }
    }
}