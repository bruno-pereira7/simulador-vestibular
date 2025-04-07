export type Questao = {
  id: string;
  ano: number;
  curso: string;
  materia: string;
  categoria: string;
  enunciado: string;
  alternativa: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  respostaCorreta: 'A' | 'B' | 'C' | 'D' | 'E';
  peso: number;
};
