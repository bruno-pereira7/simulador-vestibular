import { Request, Response } from 'express'
import { Questao } from '../types/questao'
import { randomUUID } from 'crypto'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const listar = async (req: Request, res: Response) => {
  const questoes = await prisma.questao.findMany()
  res.json(questoes)
}

export const buscarPorId = async (req: Request, res: Response) => {
  const { id } = req.params
  const questao = await prisma.questao.findUnique({ where : { id }})
 
  if (!questao)
    return res.status(404).json({ mensagem: 'Questão não encontrada' })
  res.json(questao)
}

export const criar = async (req: Request, res: Response) => {
  try{
    const novaQuestao = await prisma.questao.create({
      data:req.body
    })
    res.status(201).json(novaQuestao)
  }
  catch(erro){
    res.status(400).json({ erro: 'Erro ao criar a questão', detalhes: erro })
  }
}

export const atualizar = async (req: Request, res: Response) => {
  const { id } = req.params

  try{
    const questaoAtualizada = await prisma.questao.update({
      where: { id },
      data: req.body
    })
    res.json(questaoAtualizada)
  }
  catch(erro){
    res.status(404).json({ mensagem: 'Questão não encontrada'})
  }
}

export const remover = async (req: Request, res: Response) => {
  const { id } = req.params

  try{
    await prisma.questao.delete({ where: { id }})
    res.status(204).send()
  }
  catch(erro){
    res.status(404).json({ mensagem: 'Questão não encontrada'})
  }
}