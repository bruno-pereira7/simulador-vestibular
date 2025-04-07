

export type Questao  = {
  id: string
  ano: number
  curso: string
  materia: string
  categoria: string 
  enunciado: string 
  alternativa: Record <'A'|'B'|'C'|'D'|'E', string>
  respostaCorreta: 'A'|'B'|'C'|'D'|'E'
  peso: number
}