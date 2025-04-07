import { Router } from "express";

const controller = require('../controllers/questao.controllers')

const {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover
} = controller

const router = Router()

router.get('/', listar)
router.get('/:id', buscarPorId)
router.post('/', criar)
router.put('/:id', atualizar)
router.delete('/:id', remover)


export default router