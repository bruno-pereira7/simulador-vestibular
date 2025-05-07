import { Request, Response } from 'express'
import { Prisma, PrismaClient } from '@prisma/client'
import { correctEssay } from ''

const MAX_CARACTERES = 4000
const MIN_CARACTERES = 500

export const criarRedação = async (req: Request, res: Response) => {
  const { texto } = req.body
  const usuarioId = req.usuario?.id
}