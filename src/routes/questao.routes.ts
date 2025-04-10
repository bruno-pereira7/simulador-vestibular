import { Router } from "express";
import { contar,
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover
} from '../controllers/questao.controllers'

const router = Router()

router.get('/count', contar)
router.get('/', listar)
router.get('/:id', buscarPorId)
router.post('/', criar)
router.put('/:id', atualizar)
router.delete('/:id', remover)


export default router