-- CreateTable
CREATE TABLE "Simulado" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Simulado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SimuladoQuestao" (
    "id" TEXT NOT NULL,
    "questaoId" TEXT NOT NULL,
    "simuladoId" TEXT NOT NULL,
    "posicao" INTEGER NOT NULL,

    CONSTRAINT "SimuladoQuestao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SimuladoQuestao_simuladoId_posicao_key" ON "SimuladoQuestao"("simuladoId", "posicao");

-- AddForeignKey
ALTER TABLE "SimuladoQuestao" ADD CONSTRAINT "SimuladoQuestao_questaoId_fkey" FOREIGN KEY ("questaoId") REFERENCES "Questao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SimuladoQuestao" ADD CONSTRAINT "SimuladoQuestao_simuladoId_fkey" FOREIGN KEY ("simuladoId") REFERENCES "Simulado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
