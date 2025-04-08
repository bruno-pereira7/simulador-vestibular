import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client"; 
import { SimuladoCreateBody, AdicionarQuestaoBody } from "../types/simulado";

const prisma = new PrismaClient()

export const criarSimulado = async (req: Request, res: Response) => {
  try{
    const { nome } = req.body as SimuladoCreateBody;

    const simulado = await prisma.simulado.create({
      data: { nome }
    })
    return res.status(201).json(simulado)
  }
  catch(erro){
    return res.status(500).json({ erro: 'Erro ao criar simulado', detalhes: erro})
  }
}

export const listarSimulado = async (req: Request, res: Response) => {
  try{
    const simulados = await prisma.simulado.findMany({
      include: { questoes: true }
    })
    return res.json(simulados)
  }
  catch (erro) {
    return res.status(500).json({ erro: 'Erro ao listar simulados', detalhes: erro})
  }
}

export const adicionarQuestaoSimulado = async (req: Request, res: Response) =>{
  try{
    const simuladoId = req.params.id
    const { questaoId, posicao} = 
  }
  catch(erro){
    return res.status(500).json({ erro: 'Erro ao adicionar simulados', detalhes: erro})
  }
}