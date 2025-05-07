import { Request, Response } from 'express'
import { Prisma, PrismaClient } from '@prisma/client'
import { Usuario } from '../types/usuario'

const prisma = new PrismaClient()

export const criar = async (req: Request, res: Response) => {
  const { email, senha, nome }: Usuario = req.body  // Agora tipando corretamente o tipo

  try {
    const existente = await prisma.usuario.findUnique({ where: { email } })

    if (existente) {
      return res.status(400).json({ erro: 'Usuário já existe' })
    }

    const usuario = await prisma.usuario.create({
      data: { email, senha, nome }
    })

    return res.status(201).json(usuario)
  } catch (erro) {
    return res.status(500).json({
      erro: 'Erro ao criar usuário',
      detalhes: erro
    })
  }
}

export const login = async (req: Request, res: Response) => {
  const { email, senha }: Usuario = req.body  // Tipando corretamente a entrada

  const usuario = await prisma.usuario.findUnique({ where: { email } })

  if (!usuario || usuario.senha !== senha) {
    return res.status(401).json({ erro: 'Erro ao logar' })
  }
  return res.json(usuario)
}

export const listar = async (req: Request, res: Response) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      include: {  // ← Carrega o relacionamento
        redacoes: true  // ← Inclui as redações
      }
    })
    return res.json(usuarios)
  } catch (erro) {
    return res.status(404).json({
      erro: 'Erro ao encontrar usuários',
      detalhes: erro
    })
  }
}
