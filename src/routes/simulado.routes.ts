import { Router } from "express";
import {
  criarSimulado,
  listarSimulados,
  listarQuestoesDoSimulado
} from '../controllers/simulado.controllers'

const router = Router()

router.post('/',criarSimulado)
router.get('/', listarSimulados)
router.get('/:id/questoes', listarQuestoesDoSimulado)

export default router
