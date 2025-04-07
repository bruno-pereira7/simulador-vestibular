import { Router } from "express";
import * as QuestaoController from '../controllers/questao.controllers'

const router = Router()

router.get('/', QuestaoController.listar)
router.get('/:id', QuestaoController.buscarPorId)
router.post('/', QuestaoController.criar)
router.put('/:id', QuestaoController.atualizar)
router.delete('/:id', QuestaoController.remover)


export default router