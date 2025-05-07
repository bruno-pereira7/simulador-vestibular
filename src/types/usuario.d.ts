export type Usuario = {
  id: string
  email: string
  senha: string
  nome: string
  criadoEm: Date
  redacoes: Redacao[]
}
