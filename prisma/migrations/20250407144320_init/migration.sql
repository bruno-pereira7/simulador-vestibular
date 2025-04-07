-- CreateTable
CREATE TABLE "Questao" (
    "id" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "curso" TEXT NOT NULL,
    "materia" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "enunciado" TEXT NOT NULL,
    "alternativaA" TEXT NOT NULL,
    "alternativaB" TEXT NOT NULL,
    "alternativaC" TEXT NOT NULL,
    "alternativaD" TEXT NOT NULL,
    "alternativaE" TEXT NOT NULL,
    "respostaCorreta" TEXT NOT NULL,
    "peso" INTEGER NOT NULL,

    CONSTRAINT "Questao_pkey" PRIMARY KEY ("id")
);
