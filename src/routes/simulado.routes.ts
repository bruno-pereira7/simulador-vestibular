import { Router } from "express";
import {
  criarSimulado,
  listarSimulados,
  listarQuestoesDoSimulado
} from '../controllers/simulado.controllers'

const router = Router()

router.post("/simulados",criarSimulado)
router.get('/simulados', listarSimulados)
router.get('/simulados', listarQuestoesDoSimulado)

export default router
