import { Request, Response } from 'express'
import { Prisma, PrismaClient } from '@prisma/client'
import { openai } from '../lib/deepseek'

const prisma = new PrismaClient()
const MAX_CARACTERES = 4000
const MIN_CARACTERES = 500

export const criarRedação = async (req: Request, res: Response) => {
  const { texto } = req.body
  const usuarioId = req.usuarioId

  if (!usuarioId) {
    return res.status(401).json({ erro: 'Usuário não autenticado' });
  }

  if (!texto?.trim() || texto.length < MIN_CARACTERES || texto.length > MAX_CARACTERES) {
    return res.status(400).json({ erro: 'A redação deve ter entre 500 e 4000 caracteres' });
  }

  const hoje = new Date()
  hoje.setHours(0,0,0,0)

  const jaEnviadoHoje = await prisma.redacao.findFirst({
    where: { usuarioId, criadoEm: {gte: hoje}}
  })

  if(jaEnviadoHoje){
    return res.status(429).json({ erro: 'Limite de 1 redação por dia atingido' });
  }

  try{
    const redacao = await prisma.redacao.create({
      data: { conteudo: texto, usuarioId, status:'pendente'}
    })
    
    const resposta = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: 'Corrija esta redação com base no ENEM, avalie competências e dê nota de 0 a 1000.' },
        { role: 'user', content: texto }
      ],
      temperature: 0.7
    })

    const correcao = resposta.choices[0].message.content ?? 'Correção indisponível'

    await prisma.redacao.update({
      where: { id: redacao.id},
      data: { correcao, status: 'corrigida'}
    })

    res.status(201).json({ correcao })

  } catch(erro){
    res.status(500).json({ 
      erro: 'Erro ao processar redação',
      detalhes: erro
     })
  }
}