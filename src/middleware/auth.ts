import { Request, Response, NextFunction } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken'

declare module 'express' {
  interface Request {
    usuarioId?: string
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if(!token){
    return res.status(401).json({ erro: 'Token não fornecido'})
  }

  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string }
    req.usuarioId = decoded.id
    next()
  } catch (erro){
    return res.status(401).json({ erro: 'Token inválido.' });
  }
}
