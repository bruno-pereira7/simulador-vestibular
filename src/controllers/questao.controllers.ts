import { Request, Response } from 'express'
import { Questao } from '../types/questao'
import { randomUUID } from 'crypto'

const banco: Questao[] = []

export const listar = (req: Request, res: Response) => {
  res.json(banco)
}

export const buscarPorId = (req: Request, res: Response) => {
  const { id } = req.params
  const questao = banco.find(q => q.id === id)
  if (!questao) return res.status(404).json({ mensagem: 'Questão não encontrada' })
  res.json(questao)
}

export const criar = (req: Request, res: Response) => {
  const id = randomUUID()
  const dados = req.body
  const novaQuestao = { ...dados, id }
  banco.push(novaQuestao)
  res.status(201).json(novaQuestao)
}

export const atualizar = (req: Request, res: Response) => {
  const { id } = req.params
  const index = banco.findIndex(q => q.id === id)
  if (index === -1) return res.status(404).json({ mensagem: 'Questão não encontrada' })

  banco[index] = { ...banco[index], ...req.body }
  res.json(banco[index])
}

export const remover = (req: Request, res: Response) => {
  const { id } = req.params
  const index = banco.findIndex(q => q.id === id)
  if (index === -1) return res.status(404).json({ mensagem: 'Questão não encontrada' })

  banco.splice(index, 1)
  res.status(204).send()
}