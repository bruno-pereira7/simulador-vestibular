import { authMiddleware } from "../middleware/auth";
import { Router } from "express";
import { criar, login, listar } from "../controllers/usuario.controllers";

const router = Router()

router.get('/perfil', authMiddleware)
router.post('/registrar', criar)
router.post('/login', login)
router.get('/listar', listar)

export default router