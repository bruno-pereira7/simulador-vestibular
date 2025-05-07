import { Request, Response } from 'express'
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const criar = async (req: Request, res: Response) =>{
  const { email, senha, nome } = req.body
  try{
    const existente = prisma.usuario.findUnique({ where: { email } })
    if (existente){
      res.status(400).json({ erro : 'Usuario ja existe'})
    }

    const usuario = prisma.usuario.create({
      data: { email, senha, nome }
    })
  } catch(erro){
    return res.status(500).json({
      erro:'Erro ao criar usuario',
      detalhes: erro
    })
  }
}

export const listar = async (req: Request, res: Response) => {
  try{
    const usuarios = await prisma.usuarios.findMany()
    return res.json(usuarios)

  } catch(erro){
    return res.status(404).json({
      erro: 'Erro ao encontrar usuarios',
      detalhes: erro})
  }
}